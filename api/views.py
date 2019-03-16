from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .serializer import UserSerializer
from accounts.models import CustomUser


class UserViewSet(viewsets.ModelViewSet):
    model = CustomUser
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

