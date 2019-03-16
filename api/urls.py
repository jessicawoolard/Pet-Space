from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from accounts.models import CustomUser
from . import views

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet, 'users')


urlpatterns = router.urls


