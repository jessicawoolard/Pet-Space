from rest_framework.serializers import ModelSerializer

from accounts.models import CustomUser


class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('first_name', 'last_name', 'phone_number', 'street_address', 'street_address_2', 'city', 'state', 'zip_code', 'latitude', 'longitude')
        read_only_fields = ('username', 'email')
