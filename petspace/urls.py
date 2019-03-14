from django.urls import path, include
from django.views.generic.base import TemplateView
from . import views

app_name = 'petspace'

urlpatterns = [
    path('add_pet/', views.AddPetView.as_view(), name='add_pet'),
    path('pet_profile/<int:pk>/', views.PetProfileView.as_view(), name='pet_profile'),
    path('user_dashboard/', views.UserDashboardView.as_view(), name='dashboard'),

]
