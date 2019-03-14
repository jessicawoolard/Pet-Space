from django.urls import path, include
from django.views.generic.base import TemplateView

from . import views

app_name = 'user_profile'

urlpatterns = [
    path('user_dashboard/<int:pk>/', views.UserDashboardView.as_view(), name='dashboard'),
]
