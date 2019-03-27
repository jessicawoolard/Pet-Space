from django import forms
from .models import Pet


class PetForm(forms.ModelForm):
    class Meta:
        model = Pet
        fields = ('picture', 'name', 'type_of_animal', 'description', 'hobbies')
        widgets = {
            'description': forms.Textarea(attrs={'rows': 3, 'cols': 40}),
            'hobbies': forms.Textarea(attrs={'rows': 3, 'cols': 40}),
        }
