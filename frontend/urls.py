from django.urls import path
from .views import UserUpdateDataView

app_name = 'frontend'

urlpatterns = [
    path('update_profile/', UserUpdateDataView.as_view(), name='update_user')
]
