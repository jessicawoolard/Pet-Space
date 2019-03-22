from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from api import views
from rest_framework import routers


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
    path('', include('petspace.urls')),
    path('', include('petspace_info.urls')),
    path('', include('frontend.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    url('api/', include('api.urls')),
    url('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
# serve media and static files in dev
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
