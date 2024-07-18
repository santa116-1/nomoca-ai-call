from rest_framework import serializers

from backend.users.models import User


class UserSerializer(serializers.ModelSerializer[User]):
    class Meta:
        model = User
        fields = ["name", "url"]

        extra_kwargs = {
            "url": {"view_name": "api:user-detail", "lookup_field": "pk"},
        }


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

# class MailVerifySerializer(serializers.Serializer):
#     token = serializers.CharField()
    
class VerifyCodeSerializer(serializers.Serializer):
    email = serializers.EmailField()
    code = serializers.IntegerField()