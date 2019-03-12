from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UnicodeUsernameValidator
from localflavor.us.models import USStateField


class MyUser(AbstractBaseUser):
    username_validator = UnicodeUsernameValidator()

    username = None
    name = models.CharField(max_length=100)
    email = models.EmailField('email address', unique=True)
    phone_number = models.IntegerField()
    street_address = models.CharField(max_length=255, default='')
    street_address_2 = models.CharField(max_length=255, blank=True, default='')
    city = models.CharField(max_length=255, default='')
    state = USStateField()
    zip_code = models.IntegerField()

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def normalize_email(cls, email):
        """
        Normalize the email address by lowercasing the domain part of the it.
        """
        email = email or ''
        try:
            email_name, domain_part = email.strip().rsplit('@', 1)
        except ValueError:
            pass
        else:
            email = '@'.join([email_name, domain_part.lower()])
        return email

    # def clean(self):
    #     super().clean()
    #     self.email = self.__class__.objects.normalize_email(self.email)
