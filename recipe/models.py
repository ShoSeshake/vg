from django.db import models
from django.utils import timezone
from ckeditor_uploader.fields import RichTextUploadingField


class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to = 'recipe_photos',null=True, blank=True)
    text = models.TextField()
    category = models.ForeignKey('Category', on_delete=models.PROTECT)
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=32, unique=True)

    def __str__(self):
        return self.name

class Article(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200, unique=True)
    content = RichTextUploadingField(blank=True, null=True)
    created_date = models.DateTimeField(
        default=timezone.now)

    def __str__(self):
        return self.title

class News(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    name = models.CharField(max_length=60, unique=True)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    
    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name