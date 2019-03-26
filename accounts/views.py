from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import SignupForm
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from .tokens import account_activation_token
from django.core.mail import EmailMessage
from django.contrib.auth import get_user_model
import googlemaps
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy


User = get_user_model()


def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False

            # Geocode Address
            client = googlemaps.Client(key='AIzaSyAI7UpjEWT4Zw6yHTcXF6HPXEcjCjZrlxQ')
            geocode_result = client.geocode(user.full_address())
            user.latitude = geocode_result[0]['geometry']['location']['lat']
            user.longitude = geocode_result[0]['geometry']['location']['lng']

            user.save()
            current_site = get_current_site(request)
            mail_subject = 'Activate your pet account.'
            message = render_to_string('registration/active_email.html', {
                'user': user,
                'domain': current_site.domain,
                'uid':urlsafe_base64_encode(force_bytes(user.pk)).decode(),
                'token':account_activation_token.make_token(user),
            })
            to_email = form.cleaned_data.get('email')
            email = EmailMessage(
                        mail_subject, message, to=[to_email]
            )
            email.send()
            # Redirect to the a new page/template that shows a boostrap alert and then when they click okay, redirect to home screen.
            # Or set a timeout to redirect to home screen set_timeout() -> window.location = "127.0.0.1.... etc"
            index = reverse('petspace_info:index', args='')
            return HttpResponseRedirect(index)
    else:
        form = SignupForm()
    return render(request, 'registration/signup.html', {'form': form})


def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        login(request, user)
        # return redirect('home')
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')
    else:
        return HttpResponse('Activation link is invalid!')


