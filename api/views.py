from django.shortcuts import render
from rest_framework.viewsets import GenericViewSet, ModelViewSet
from rest_framework.mixins import RetrieveModelMixin, UpdateModelMixin
from rest_framework.permissions import IsAuthenticated
from .serializer import UserSerializer
from accounts.models import CustomUser
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.authentication import SessionAuthentication


class UserViewSet(ModelViewSet):
    model = CustomUser
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    depth = 1


class CsrfExemptMixin(SessionAuthentication):
    def enforce_csrf(self, request):
        return


class UpdateUserViewset(LoginRequiredMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    model = CustomUser
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (CsrfExemptMixin,)

    def get_object(self):
        return self.request.user





