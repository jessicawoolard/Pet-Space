from django.test import TestCase
from django.urls import reverse


# class CustomUserTestCase(TestCase):
#
#     def setUp(self):
#         CustomUser.objects.create(user=1, name='Cleo', picture=None, type_of_animal='Sloth', description='Furry', hobbies='sleeping', lost=True)
#         # Pet.objects.create(name='Sam', type_of_animal='Bird', description='Blue', hobbies='Flying', lost=False)
#
#     def test_pets_have_values(self):
#         sloth = CustomUser.objects.get(name='Cleo')
#         self.assertEqual(sloth.user, 1)
#         self.assertEqual(sloth.name, 'Cleo')
#         self.assertEqual(sloth.type_of_animal, 'Sloth')
#         self.assertEqual(sloth.description, 'Furry')
#         self.assertEqual(sloth.hobbies, 'Sleeping')
#         self.assertEqual(sloth.lost, True)

class TestViews(TestCase):

    def test_index(self):
        view_url = reverse('petspace_info:index')
        response = self.client.get(view_url)
        self.assertEqual(response.status_code, 200)

    def test_list(self):
        view_url = reverse('login')
        response = self.client.get(view_url)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, '<h2>Login</h2>')
