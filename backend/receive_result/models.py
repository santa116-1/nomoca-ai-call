from django.db import models

class ReceivingResult(models.Model):
    receiving_id = models.CharField(max_length=34, primary_key=True)
    user_id = models.CharField(max_length=8)
    requirements_overview = models.CharField(max_length=40)
    sender_phone_number = models.CharField(max_length=21)
    wrapping_phone_number = models.CharField(max_length=21)
    name = models.CharField(max_length=100)
    examination_ticket_number = models.CharField(max_length=50)
    requirements_detail = models.CharField(max_length=200)
    preferred_date = models.CharField(max_length=8)
    desired_time = models.CharField(max_length=8)
    receiving_time = models.DateTimeField()
    phone_transfer = models.CharField(max_length=20)
    voice_url = models.CharField(max_length=200)
    voice_url_on_transfer = models.CharField(max_length=200)
    is_valid = models.BooleanField(default=True)
    memo = models.CharField(max_length=100, blank=True, null=True)
    registration_date = models.DateTimeField(auto_now_add=True)
    registration_id = models.CharField(max_length=8, default='SYSTEM固定')
    updated_date = models.DateTimeField(auto_now=True)
    updated_id = models.CharField(max_length=8, default='SYSTEM固定')

    class Meta:
        db_table = 'receiving_result'

    def __str__(self):
        return self.name

