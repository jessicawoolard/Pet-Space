from django.views.generic import CreateView, TemplateView, ListView
from django.urls import reverse_lazy
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .models import Pet
from .forms import PetForm
from qr_code.qrcode.utils import QRCodeOptions
from django.contrib.sites.shortcuts import get_current_site

from django.contrib.auth.models import User
from django.contrib.auth.mixins import LoginRequiredMixin


class AddPetView(LoginRequiredMixin, CreateView):
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
        return reverse('petspace:dashboard')
                       # , kwargs={'pk': self.object.pk})


class PetProfileView(TemplateView):
    template_name = 'pet_profile.html'
    # success_url = reverse('p')

    def get_context_data(self, **kwargs):
        pet_pk = self.kwargs.get('pk')
        is_from_qr = self.kwargs.get("qr")
        pet = Pet.objects.get(pk=pet_pk)
        my_options = QRCodeOptions(size='M', border=6, error_correction='L')
        url_string = self.request.build_absolute_uri() + "?qr=true"

        if is_from_qr == "true":
            print("message user")
        context = {
            'pet': pet,
            'my_options': my_options,
            'url_string': url_string

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



