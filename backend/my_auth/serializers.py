from rest_framework import serializers
from my_auth.models import UserInformation

class UserSerializer(serializers.ModelSerializer[UserInformation]):
    class Meta:
        model = UserInformation
        fields = ["name", "url"]

        extra_kwargs = {
            "url": {"view_name": "api:user-detail", "lookup_field": "pk"},
        }
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

class VerifyCodeSerializer(serializers.Serializer):
    email = serializers.EmailField()
    code = serializers.IntegerField()