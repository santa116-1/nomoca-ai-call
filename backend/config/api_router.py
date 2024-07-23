from django.conf import settings
from rest_framework.routers import DefaultRouter
from rest_framework.routers import SimpleRouter

from django.urls import path, include

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()
    
urlpatterns = [
    path('authentication/', include('my_auth.urls')),
]
app_name = "api"
