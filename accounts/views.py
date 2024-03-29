from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView,CreateView
from django.contrib.auth.forms import UserCreationForm 
from django.urls import reverse_lazy
from . import forms



class MyLoginView(LoginView):
    form_class = forms.LoginForm
    template_name = "accounts/login.html"
    success_url = reverse_lazy("/recipe/recipe_index.html")

class MyLogoutView(LoginRequiredMixin, LogoutView):
    template_name = "accounts/logout.html"
    success_url = reverse_lazy("/recipe/recipe_index.html")


class UserCreateView(CreateView):
    form_class = UserCreationForm
    template_name = "accounts/create.html"
    success_url = reverse_lazy("login")