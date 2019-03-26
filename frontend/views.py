import os

from django.template import loader, Context
from django.views.generic import View, TemplateView
from django.http import HttpResponse
from django.conf import settings
from petspace.models import Pet


# t = loader.get_template('base.html')
# c = Context({'object_list': Pet.objects.all()})
# rendered = t.render(c)


class UserUpdateDataView(TemplateView):
    template_name = 'build/index.html'
    """
    Serves the compiled frontend entry point (only works if you have run `npm
    run build`).
    """

    # def get(self, request, *args, **kwargs):
    #     try:
    #         with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
    #             return HttpResponse(f.read())
    #     except FileNotFoundError:
    #         return HttpResponse(
    #             """
    #             This URL is only used when you have built the production
    #             version of the app. Visit http://localhost:3000/ instead, or
    #             run `yarn run build` to test the production version.
    #             """,
    #             status=501,
    #         )
