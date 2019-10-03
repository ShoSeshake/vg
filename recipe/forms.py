from django import forms
from .models import Post, Category, Article
from django.contrib.auth import forms as auth_forms

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = ['title', 'text', 'image','category']

class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ['title','content']