from django.shortcuts import render
from django.views.generic import ListView, CreateView, UpdateView, TemplateView


# class IndexView(TemplateView):
#     template_name = 'index.html'


class UserDashboardView(TemplateView):
    template_name = 'user_dashboard.html'

