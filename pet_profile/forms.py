from django import forms
from .models import Pet


class PetForm(forms.ModelForm):
    class Meta:
        model = Pet
        fields = ('picture', 'name', 'type_of_animal', 'description', 'hobbies')
