from django.urls import path
from .views import UserUpdateDataView

app_name = 'frontend'

urlpatterns = [
    path('update/', UserUpdateDataView.as_view(), name='update_data')
]
