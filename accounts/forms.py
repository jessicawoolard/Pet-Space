from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth.models import User
from .models import CustomUser


class SignupForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'email', 'phone_number', 'street_address', 'street_address_2', 'city', 'state', 'zip_code')

        def clean_first_name(self):
            return self.cleaned_data['first_name'].capitalize()

        def clean_last_name(self):
            return self.cleaned_data['last_name'].capitalize()

        def clean_street_address(self):
            return self.cleaned_data['street_address'].capitalize()

        def clean_street_address_2(self):
            return self.cleaned_data['street_address_2'].capitalize()

        def clean_city(self):
            return self.cleaned_data['city'].capitalize()


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'email', 'phone_number', 'street_address', 'street_address_2', 'city', 'state', 'zip_code')

    def clean_first_name(self):
            return self.cleaned_data['first_name'].capitalize()

    def clean_last_name(self):
        return self.cleaned_data['last_name'].capitalize()

    def clean_street_address(self):
        return self.cleaned_data['street_address'].capitalize()

    def clean_street_address_2(self):
        return self.cleaned_data['street_address_2'].capitalize()

    def clean_city(self):
        return self.cleaned_data['city'].capitalize()

