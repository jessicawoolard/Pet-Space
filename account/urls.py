from django.urls import path
from . import views

app_name = 'houses'

urlpatterns = [
    path('', views.LoginView.as_view(), name='index'),
    path('', views.SignupView.as_view(), name='signup'),
    path('', views.UpdateUserView.as_view(), name='update_user'),
]
