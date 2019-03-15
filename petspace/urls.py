from django.conf.urls import include, url
from django.urls import path
from qr_code import urls as qr_code_urls
from . import views

app_name = 'petspace'

urlpatterns = [
    path('add_pet/', views.AddPetView.as_view(), name='add_pet'),
    path('pet_profile/<int:pk>/', views.PetProfileView.as_view(), name='pet_profile'),
    path('user_dashboard/', views.UserDashboardView.as_view(), name='dashboard'),
    url(r'^qr_code/', include(qr_code_urls, namespace="qr_code"))
]
