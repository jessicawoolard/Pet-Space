from django.views.generic import CreateView, TemplateView, ListView
from django.urls import reverse_lazy
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .models import Pet
from .forms import PetForm

from django.contrib.auth.models import User
from django.contrib.auth.mixins import LoginRequiredMixin


class AddPetView(CreateView):
    template_name = 'add_pet_form.html'
    model = Pet
    form_class = PetForm

    def form_valid(self, form):
        obj = form.save(commit=False)
        # user = User.objects.get(pk=1)
        obj.user = self.request.user
        obj.save()
        self.object = obj
        return HttpResponseRedirect(self.get_success_url())

    def get_success_url(self):
        return reverse('petspace:dashboard', kwargs={'pk': self.object.pk})


class PetProfileView(LoginRequiredMixin, TemplateView):
    template_name = 'pet_profile.html'
    # success_url = reverse('p')

    def get_context_data(self, **kwargs):
        pet_pk = self.kwargs.get('pk')
        pet = Pet.objects.get(pk=pet_pk)
        context = {
            'pet': pet
        }
        return context


class UserDashboardView(LoginRequiredMixin, ListView):
    template_name = 'user_dashboard.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['pets'] = Pet.objects.filter(user=self.request.user)
        return context

    def get_queryset(self):
        return Pet.objects.filter(user=self.request.user)



