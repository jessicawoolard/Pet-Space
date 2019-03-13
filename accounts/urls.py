from django.conf.urls import url
from . import views
from django.conf import settings
from django.contrib.auth.views import LogoutView

app_name = 'accounts'

urlpatterns = [
    url(r'^signup/$', views.signup, name='signup'),
    url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        views.activate, name='activate'),
    url(r'^logout/$', LogoutView, {'next_page': settings.LOGOUT_REDIRECT_URL}, name='logout')

]
