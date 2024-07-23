from django.urls import path
from .views import (
    LoginView, 
    RegisterView, 
    GetUserView, 
    ForgetPasswordView, 
    ResetPasswordView, 
    GetUserInfo, 
    DeleteUser,  
    GetUserEmail, 
    VerifyCodeView
)

urlpatterns = [
    path("login/", view=LoginView.as_view(), name="login"),
    path('verify-code/', VerifyCodeView.as_view(), name='verify_code'),
    path("register/", view=RegisterView.as_view(), name="register"),
    path("forget-password/", view=ForgetPasswordView.as_view(), name="forgetpassword"),
    path("reset-password/", view=ResetPasswordView.as_view(), name="resetpassword"),
    path("getUser/", view=GetUserView.as_view(), name="getUserInfo"),
    path("getUserInfo/", view=GetUserInfo.as_view(), name="getUserInfoData"),
    path("getUserName/", view=GetUserInfo.as_view(), name="getUserInfoData"),
    path("delete_account/", view=DeleteUser.as_view(), name="delete_account"),
    path("get-useremail/", view=GetUserEmail.as_view(), name="get-useremail")
]
