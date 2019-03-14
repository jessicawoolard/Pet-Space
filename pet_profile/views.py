from django.views.generic import CreateView, TemplateView
from django.urls import reverse_lazy
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .models import Pet
from .forms import PetForm
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required


class AddPetView(CreateView):
    template_name = 'add_pet_form.html'
    model = Pet
    form_class = PetForm

    # @login_required(login_url='petspace_info:login')
    # def form_valid(self, form):
    #     obj = form.save(commit=False)
    #     user = User.objects.get(pk=1)
    #     obj.user = self.request.user
    #     obj.save()
    #     return HttpResponseRedirect(self.get_success_url())
    # success_url = reverse_lazy('pet_profile:pet_profile')

    # def new_pet(request):
    #     if request.method == 'POST':
    #         form = PetForm(request.POST)
    #         if form.is_valid():
    #             return  HttpResponseRedirect('pet_profile')
    #     else:
    #         form = PetForm()
    #         return render(request, 'add_pet_form.html', {'form': form})
    # #
    # def get_success_url(self,):
    #     return reverse('petspace_info:index')


class PetProfileView(TemplateView):
    template_name = 'pet_profile.html'
    # success_url = reverse('p')

    def get_context_data(self, **kwargs):
        pet_pk = self.kwargs.get('pk')
        pet = Pet.objects.get(pk=pet_pk)
        context = {
            'pet': pet
        }
        return context


