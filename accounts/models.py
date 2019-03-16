from django.db import models
from django.contrib.auth.models import AbstractUser
from localflavor.us.models import USStateField
from phone_field import PhoneField


class CustomUser(AbstractUser):
    phone_number = PhoneField(null=False, blank=False, unique=True)
    street_address = models.CharField(max_length=255)
    street_address_2 = models.CharField(max_length=255, blank=True, default='')
    city = models.CharField(max_length=255)
    state = USStateField()
    zip_code = models.IntegerField()

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def create_superuser(self, username, password=None):
        user = self.CustomUser(
            username=username,
            password=password,
            phone_number='5555555',
            street_address='123 easy street',
            city='greenville-nc',
            state='NC',
            zip_code='29783',
            is_staff=True,
            is_admin=True
        )
        return user

