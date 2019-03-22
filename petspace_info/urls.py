from django.urls import path, include
from django.views.generic.base import TemplateView

from . import views

app_name = 'petspace_info'

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='index')

]
