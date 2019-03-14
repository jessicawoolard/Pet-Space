from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth.models import User
from .models import CustomUser


class SignupForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'email', 'phone_number', 'street_address', 'street_address_2', 'city', 'state', 'zip_code')


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'email', 'phone_number', 'street_address', 'street_address_2', 'city', 'state', 'zip_code')





