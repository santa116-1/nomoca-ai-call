from django.db import models

def default_email():
    return 'admin@example.com'  # Example default email
class LifVersion(models.Model):
    display_name = models.CharField(max_length=100)
    model_name = models.CharField(max_length=100)
    endpoint = models.URLField()
    params = models.TextField()

    def __str__(self):
        return self.display_name

class SiteData(models.Model):
    email = models.EmailField(max_length=255, default=default_email)
    site_name = models.CharField(max_length=255)
    site_url = models.URLField(max_length=200)
    admin_name = models.CharField(max_length=255)
    admin_pass = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.site_name
    
class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()  # Price in cents

    def __str__(self):
        return self.name