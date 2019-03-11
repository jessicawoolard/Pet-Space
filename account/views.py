from django.shortcuts import render
from django.views.generic import ListView, CreateView, UpdateView, TemplateView


class LoginView(TemplateView):
    pass


class SignupView(TemplateView):
    pass


class UpdateUserView(UpdateView):
    template_name = 'update_user.html'
    pass
