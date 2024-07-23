import os
from django.contrib.auth import authenticate, login
from rest_framework import status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import JsonResponse
from my_auth.models import UserInformation
from .serializers import LoginSerializer, VerifyCodeSerializer
from django.conf import settings
from django.core.mail import EmailMessage
from django.contrib.auth import get_backends
from .utils import send_mail_verify_link, send_rest_password_link

class LoginView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data["email"]
            password = serializer.validated_data["password"]
            user = authenticate(request, email_address=email, password=password)
            if user is not None: 
                user.generate_and_send_authority_code()
                
                return Response(
                    {
                        "status": {
                            "type": "success",
                            "message": "認証コードが送信されました。コードを入力してください。",
                        },
                        "result": {
                            "user": {
                                "email": user.email_address,
                            },
                        },
                        "navigate": "/verify-code",
                    },
                )
            
            else:
                return Response(
                    {
                        "error": "無効な電子メールまたはパスワード",
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )
            
        else:
            return Response(
                {
                    "error": "ログイン失敗！もう一度お試しください",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

class VerifyCodeView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def post(self, request):
        serializer = VerifyCodeSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data["email"]
            code = serializer.validated_data["code"]
            try:
                user = UserInformation.objects.get(email_address=email)
            except UserInformation.DoesNotExist:
                return Response(
                    {
                        "error": "無効な電子メール",
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )
            print(user.verify_authority_code(code))
            if user.verify_authority_code(code):
                
                backends = get_backends()
                if backends:
                    user.backend = backends[0].__class__.__name__
                login(request, user)
                refresh = RefreshToken.for_user(user)
                user.clear_authority_code() 
                return Response(
                    {
                        "status": {
                            "type": "success",
                            "message": "おかえりなさい！ログインに成功しました。",
                        },
                        "result": {
                            "token": str(refresh.access_token),
                            "user": {
                                "email": user.email_address,
                            },
                        },
                        "navigate": "/home",
                    },
                )
            else:
                return Response(
                    {
                        "error": "無効な認証コード",
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )
        else:
            return Response(
                {
                    "error": "認証コードの確認に失敗しました！もう一度お試しください",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )


class RegisterView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        front_url=os.getenv("FRONT_URL")
        try:
            data = request.data
            email = data["email"]
            password = data["password"]

            if password:
                if len(password) >= 8:
                    if not UserInformation.objects.filter(email_address=email).exists():
                        user = UserInformation.objects.create_user(
                            email_address=email,
                            password=password,
                        )
                        if UserInformation.objects.filter(email_address=email).exists():
                            refresh = RefreshToken.for_user(user)
                            response = send_mail_verify_link(
                                email,
                                f"{front_url}/mail-verify/?token={str(refresh.access_token)}",
                            )
                            if response["status"] == "success":
                                return Response(
                                    {
                                        "success": "ユーザーが登録されました。"
                                    },
                                    status=status.HTTP_201_CREATED,
                                )
                            elif response["status"] == "failure":
                                return Response(
                                    {
                                        "error": "認証リンクを送信できませんでした。",
                                        "details": response
                                    },
                                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                                )
                            else:
                                return Response(
                                    {"error": "メールサーバー側のエラーにより、認証コードを送信できません。"
                                    "後ほど再試行してください。",
                                    "details": response 
                                    },
                                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                                )
                        else:
                            return Response(
                                {"error": "ユーザーの作成に失敗しました"},
                                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                            )
                    else:
                        return Response(
                            {"error": "ユーザーメールアドレスが既に存在する"},
                            status=status.HTTP_400_BAD_REQUEST,
                        )
                else:
                    return Response(
                        {"error": "パスワードは8文字以上"},
                        status=status.HTTP_400_BAD_REQUEST,
                    )
            else:
                return Response(
                    {"error": "パスワードが一致しない"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
        except Exception as e:
            print(e)
            return Response(
                {"error": "Something went wrong"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

class ForgetPasswordView(APIView):
    permission_classes = (AllowAny,)
    authentication_classes = ()

    def post(self, request):
        email = request.data["email"]
        front_url=os.getenv("FRONT_URL")
        print(front_url)
        try:
            user = UserInformation.objects.get(email_address=email)
            refresh = RefreshToken.for_user(user)
            response = send_rest_password_link(
                email,
                f"{front_url}/reset-password/?token={str(refresh.access_token)}",
            )
            if response["status"] == "success":
                return Response(
                    {"success": "認証リンクが送信されました。"},
                    status=status.HTTP_201_CREATED,
                )
            elif response["status"] == "failure":
                return Response(
                    {
                        "error": "認証リンクを送信できませんでした。",
                        "details": response  
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
            else:
                return Response(
                    {"error": "メールサーバー側のエラーにより、認証コードを送信できません。"
                    "後ほど再試行してください。",
                    "details": response 
                    },
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        except Exception as e:
            print(e)
            return Response(
                {"error": "ユーザーが存在しない"}, status=status.HTTP_400_BAD_REQUEST
            )

class ResetPasswordView(APIView):
    def post(self, request):
        email=request.user
        user = UserInformation.objects.get(email_address=email)
        password = request.data["password"]
        confirm_password = request.data["confirmPassword"]

        if password == confirm_password:
            user.set_password(password)
            user.save()
            return Response({"success": "success"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Password not matched"})


class GetUserView(APIView):
    def post(self, request):
        user = request.user
        print(user)
        find_user = UserInformation.objects.get(email_address=user)

        if find_user:
            refresh = RefreshToken.for_user(find_user)
            return Response(
                {
                    "result": {
                        "token": str(refresh.access_token),
                        "user": {
                            "username": user.fullname,
                            "email": user.email_address,
                        },
                    }
                },
                status=status.HTTP_200_OK,
            )
        else:
            return Response(
                {"error": "ユーザーが存在しません。ログインしてください。"},
                status=status.HTTP_400_BAD_REQUEST,
            )

class GetUserInfo(APIView):
    def post(self, request):
        all_users = UserInformation.objects.all()
        users_info = [
            {"username": user.fullname, "email_address": user.email} for user in all_users
        ]
        return Response({"user": users_info}, status=status.HTTP_200_OK)
class DeleteUser(APIView):
    def post(self, request):
        user = request.user
        email = request.data.get("email")
        print(email, user.email_address)
        if user.email_address != email:
            return Response(
                {"error": "Please input the correct Email Address。"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        del_user = UserInformation.objects.get(email_address=user)
        if del_user:
            del_user.delete()
            return Response("削除成功", status=status.HTTP_200_OK)
        else:
            return Response(
                {"error": "ユーザーが見つかりません。"},
                status=status.HTTP_400_BAD_REQUEST,
            )
class GetUserEmail(APIView):
    def get(self, request):
        user = request.user
        return JsonResponse({'email': user.email_address})