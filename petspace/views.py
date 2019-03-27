import os
from django.views.generic import CreateView, TemplateView, ListView, UpdateView, View
from django.urls import reverse_lazy
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .models import Pet
from accounts.models import CustomUser
from .forms import PetForm
from qr_code.qrcode.utils import QRCodeOptions
from django.contrib.auth.mixins import LoginRequiredMixin
from twilio.rest import Client
import googlemaps

ACCOUNT_SID = os.environ.get('TWILIO_ACCOUNT_SID')
AUTH_TOKEN = os.environ.get('TWILIO_AUTH_TOKEN')
TWILIO_NUMBER = os.environ.get('TWILIO_NUMBER')
GOOGLE_MAPS_API_KEY = os.environ.get('GOOGLE_MAPS_API_KEY')


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


class PetProfileView(TemplateView):
    template_name = 'pet_profile.html'

    # success_url = reverse('p')

    def get_context_data(self, **kwargs):
        pet_pk = self.kwargs.get('pk')
        is_from_qr = self.request.GET.get("qr")
        pet = Pet.objects.get(pk=pet_pk)
        my_options = QRCodeOptions(size='M', border=6, error_correction='L')
        url_string = self.request.build_absolute_uri() + "?qr=true"

        user = CustomUser.objects.get(pk=pet.user_id)
        print(user.phone_number)
        phone_number = user.phone_number.raw_phone
        # have the phone number not "re-format" the value, need it in +12345678901 format

        if is_from_qr == "true":
            client = Client(ACCOUNT_SID, AUTH_TOKEN)

            print('Sending a message...')
            client.messages.create(to=phone_number, from_="+12028519104", body=pet.name + "'s" + ' ' + "QR code has been scanned")

        # gmaps = googlemaps.Client(key=GOOGLE_MAPS_API_KEY)
        # geocode_result = gmaps.geocode(user.street_address)
        # reverse_geocode_result = gmaps.reverse_geocode((40.714224, -73.961452))

        context = {
            'pet': pet,
            'my_options': my_options,
            'url_string': url_string,
            "email_address": user.email,
            "latitude": user.latitude,
            "longitude": user.longitude
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


class EditPetProfileView(UpdateView):
    template_name = 'edit_pet_form.html'
    model = Pet
    form_class = PetForm
    success_url = reverse_lazy('petspace:dashboard')


class PetLostView(View):
    def post(self, request, **kwargs):
        pet_pk = self.kwargs.get('pk')
        pet = Pet.objects.get(pk=pet_pk)
        pet.lost = not pet.lost
        pet.save()
        profile_url = reverse('petspace:dashboard')
        return HttpResponseRedirect(profile_url)


class AboutUsView(TemplateView):
    template_name = 'about_us.html'


class ContactView(TemplateView):
    template_name = 'contact.html'


class OurStoryView(TemplateView):
    template_name = 'our_story.html'


class PhotoGalleryView(TemplateView):
    template_name = 'photo_gallery.html'

    def get_context_data(self, **kwargs):
        pets = Pet.objects.all()
        images = []
        for pet in pets:
            images.append(pet.picture)
        context = {
            'images': images
        }
        return context
