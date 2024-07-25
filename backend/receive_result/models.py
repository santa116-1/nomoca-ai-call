import uuid
from typing import ClassVar
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db.models import CharField, EmailField, DateTimeField, BooleanField
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
import random
from django.core.mail import send_mail

class UserInformation(AbstractBaseUser, PermissionsMixin):
    receiving_id = CharField(max_length=38, unique=True)
    user_name = CharField(max_length=100, default='')
    user_name_kana = CharField(max_length=50, default='')
    responsible_person_name = CharField(max_length=60, default='')
    responsible_person_name_kana = CharField(max_length=60, default='')
    responsible_person_name_phone = CharField(max_length=21, default='')
    email_address = EmailField(unique=True)
    type_code = CharField(max_length=4, default='')
    authority_code = CharField(max_length=50, default='')
    transfer_phone_number = CharField(max_length=21, default='')
    ai_call_phone_number = CharField(max_length=21, default='')
    memo = CharField(max_length=100, default='')
    is_valid = BooleanField(default=True)
    registration_date = DateTimeField(auto_now_add=True)
    registration_id = CharField(max_length=8, default='')
    updated_date = DateTimeField(auto_now=True)
    updated_id = CharField(max_length=8, default='')
    is_admin = BooleanField(default=False)
    is_active = BooleanField(default=True)
    is_staff = BooleanField(default=False)
    is_superuser = BooleanField(default=False)
    
    def __str__(self):
        return self.site_name