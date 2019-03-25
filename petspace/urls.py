from django.conf.urls import include, url
from django.urls import path
from qr_code import urls as qr_code_urls
from . import views

app_name = 'petspace'

urlpatterns = [
    path('add_pet/', views.AddPetView.as_view(), name='add_pet'),
    path('pet_profile/<int:pk>/', views.PetProfileView.as_view(), name='pet_profile'),
    path('user_dashboard/', views.UserDashboardView.as_view(), name='dashboard'),
    path('edit_pet_profile/<int:pk>/', views.EditPetProfileView.as_view(), name='edit_pet'),
    url('qr_code/', include(qr_code_urls, namespace="qr_code")),
    path('pet_profile/<int:pk>/lost/', views.PetLostView.as_view(), name='lost_pet'),
    path('about_us/', views.AboutUsView.as_view(), name='about_us'),
    path('contact/', views.ContactView.as_view(), name='contact'),
    path('our_story/', views.OurStoryView.as_view(), name='our_story'),
    path('photo_gallery/', views.PhotoGalleryView.as_view(), name='photo_gallery'),
    # url('sms/', 'petspace.views.sms_personal')
]
