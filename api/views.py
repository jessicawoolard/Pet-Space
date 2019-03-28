from django.shortcuts import render
from rest_framework.viewsets import GenericViewSet, ModelViewSet
from rest_framework.mixins import RetrieveModelMixin, UpdateModelMixin
from rest_framework.permissions import IsAuthenticated
from .serializer import UserSerializer
from accounts.models import CustomUser
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.authentication import SessionAuthentication
import googlemaps


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

    def perform_update(self, serializer):
        instance = serializer.save()
        client = googlemaps.Client(key='AIzaSyAI7UpjEWT4Zw6yHTcXF6HPXEcjCjZrlxQ')
        geocode_result = client.geocode(instance.full_address())
        instance.latitude = geocode_result[0]['geometry']['location']['lat']
        instance.longitude = geocode_result[0]['geometry']['location']['lng']

        instance.save()





