from django.urls import path, include
from django.views.generic.base import TemplateView
from . import views

app_name = 'pet_profile'

urlpatterns = [
    path('add_pet/', views.AddPetView.as_view(), name='add_pet'),
    path('<int:pk>/pet_profile/', views.PetProfileView.as_view(), name='pet_profile')

]
