from django.db import models
from django.conf import settings


class Pet(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    picture = models.ImageField()
    name = models.CharField(max_length=100)
    type_of_animal = models.CharField(max_length=75)
    description = models.CharField(max_length=250)
    hobbies = models.CharField(max_length=255, default='')
    lost = models.BooleanField(default=False)
