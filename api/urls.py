from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from . import views

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet, 'users')

urlpatterns = [
    path('update_profile/', views.UpdateUserViewset.as_view({
        'get': 'retrieve',
        'put': 'update'
    }), name='update_profile')
]

urlpatterns += router.urls
