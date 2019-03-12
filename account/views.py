from django.shortcuts import render
from django.views.generic import TemplateView, FormView
from django.urls import reverse_lazy
from .forms import CustomFieldForm
from .models import MyUser


class LoginView(TemplateView):
    template_name = 'login.html'
    pass


class SignupView(FormView):
    template_name = 'signup.html'
    model = MyUser
    form_class = CustomFieldForm
    success_url = reverse_lazy('pets:index')
