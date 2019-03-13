from django.urls import path, include
from django.views.generic.base import TemplateView

from . import views

app_name = 'pets'

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    path('user_dashboard/<int:pk>/', views.UserDashboardView.as_view(), name='dashboard'),
    path('accounts/', include('django.contrib.auth.urls')),
]
