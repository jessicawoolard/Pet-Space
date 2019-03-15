from django.urls import path

from . import views

app_name = 'api'

urlpatterns = [
    path('user/<int:pk>/', views.UserViewSet.as_view({
            'get': 'list',  # GET method should list objects
            'post': 'create',  # POST method should create object
            'put': 'update',
            'delete': 'destroy'
        })),

    ]
