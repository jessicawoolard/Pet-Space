from django.shortcuts import render
from rest_framework import viewsets
from .serializer import UserSerializer
from accounts.models import CustomUser


class UserViewSet(viewsets.ModelViewSet):
    model = CustomUser
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
