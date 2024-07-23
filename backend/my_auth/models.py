import uuid
from typing import ClassVar
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db.models import CharField, EmailField
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
import random
from django.core.mail import send_mail
from .utils import send_security_code

class UserManager(BaseUserManager):
	use_in_migration = True

	def create_user(self, email_address, password, **extra_fields):
		if not email_address:
			raise ValueError('Email is Required')
		user = self.model(email_address=self.normalize_email(email_address), **extra_fields)
		user.set_password(password)
		user.save(using=self._db)
		return user

	def create_superuser(self, email_address, password, **extra_fields):
		extra_fields.setdefault('is_staff', True)
		extra_fields.setdefault('is_superuser', True)
		extra_fields.setdefault('is_active', True)

		if extra_fields.get('is_staff') is not True:
			raise ValueError('Superuser must have is_staff = True')
		if extra_fields.get('is_superuser') is not True:
			raise ValueError('Superuser must have is_superuser = True')

		return self.create_user(email_address, password, **extra_fields)

class UserInformation(AbstractBaseUser, PermissionsMixin):
    user_id = models.CharField(max_length=8, unique=True)
    user_name = models.CharField(max_length=100, default='')
    user_name_kana = models.CharField(max_length=50, default='')
    responsible_person_name = models.CharField(max_length=60, default='')
    responsible_person_name_kana = models.CharField(max_length=60, default='')
    responsible_person_name_phone = models.CharField(max_length=21, default='')
    email_address = models.EmailField(unique=True)
    type_code = models.CharField(max_length=4, default='')
    authority_code = models.CharField(max_length=50, default='')
    transfer_phone_number = models.CharField(max_length=21, default='')
    ai_call_phone_number = models.CharField(max_length=21, default='')
    memo = models.CharField(max_length=100, default='')
    is_valid = models.BooleanField(default=True)
    registration_date = models.DateTimeField(auto_now_add=True)
    registration_id = models.CharField(max_length=8, default='')
    updated_date = models.DateTimeField(auto_now=True)
    updated_id = models.CharField(max_length=8, default='')
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()
    
    USERNAME_FIELD = 'email_address'
    REQUIRED_FIELDS = []
    class Meta:
        db_table = 'user_information'

    def __str__(self):
        return self.email_address

    def save(self, *args, **kwargs):
        if not self.user_id:
            self.user_id = self.generate_unique_user_id()
        super(UserInformation, self).save(*args, **kwargs)

    def generate_unique_user_id(self):
        while True:
            user_id = uuid.uuid4().hex[:8].upper()
            if not UserInformation.objects.filter(user_id=user_id).exists():
                break
        return user_id

    def generate_and_send_authority_code(self):
        code = str(random.randint(100000, 999999))        
        self.authority_code = code
        self.save()
        send_security_code([self.email_address], code)
    
    def clear_authority_code(self):
        self.authority_code = ""
        self.save()

    def verify_authority_code(self, code):
        print(self.authority_code, code)
        return str(self.authority_code).strip() == str(code).strip()