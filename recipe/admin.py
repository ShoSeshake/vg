from django.contrib import admin
from .models import Post, Category, Article, News

admin.site.register(Post)
admin.site.register(Category)
admin.site.register(Article)
admin.site.register(News)