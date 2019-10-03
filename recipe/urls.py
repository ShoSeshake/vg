from django.urls import path
from . import views
from django.conf import settings           
from django.conf.urls.static import static 
urlpatterns = [
    path('', views.recipe_index, name='recipe_index'),
    path('recipe/list/', views.recipe_list, name='recipe_list'),
    path('recipe/new/', views.recipe_new, name='recipe_new'),
    path('recipe/<int:pk>/edit/', views.recipe_edit, name='recipe_edit'),
    path('recipe/<int:pk>/delete/', views.recipe_delete, name='recipe_delete'),
    path('users/<int:pk>/', views.users_detail, name='users_detail'), 
    path('article/new/', views.article_new, name='article_new'), 
    path('article/<int:pk>/edit/', views.article_edit, name='article_edit'), 
    path('article/<int:pk>/', views.article_detail, name='article_detail'), 
    path('article/list/', views.article_list, name='article_list'),
    path('article/<int:pk>/delete/', views.article_delete, name='article_delete'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 