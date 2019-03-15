from rest_framework.serializers import ModelSerializer

from accounts.models import CustomUser


class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'email', 'phone_number', 'street_address', 'street_address_2', 'city', 'state', 'zip_code')
