from django.utils import timezone
from .models import Post, Category, Article, News
from django.shortcuts import render, get_object_or_404
from .forms import PostForm, ArticleForm
from django.shortcuts import redirect
from django.contrib.auth.models import User
from django.template.loader import render_to_string
from django.http import JsonResponse
from django.views.decorators.http import require_POST


def recipe_index(request):
    post = Post.objects.all().order_by('-id')[0]
    news = News.objects.filter(published_date__lte=timezone.now()).order_by('published_date')[0:4]
    return render(request, 'recipe/recipe_index.html', {'post':post,'news':news})

def recipe_list(request):
    category = Category.objects.all()
    post = Post.objects.all().order_by('-id')[0]
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    ctx={'posts': posts, 'category':category, 'post':post}
    if request.GET.get("q"):
        url_parameter = request.GET.get("q")
        if url_parameter:
            posts = Post.objects.filter(category_id=url_parameter)
        else:
            posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
        ctx={'posts': posts, 'category':category, 'post':post}

        if request.is_ajax():
            html = render_to_string(
                template_name="recipe/recipes_results-partial.html", 
                context={'posts': posts, 'category':category, 'post':post}
            )
            data_dict = {"html_from_view": html}
            return JsonResponse(data=data_dict, safe=False)

    if request.GET.get("p") :
        url_parameter2 = request.GET.get("p")
        if url_parameter2:
            post = Post.objects.get(pk=url_parameter2)
        ctx={'posts': posts, 'category':category, 'post':post}

        if request.is_ajax():
            html = render_to_string(
                template_name="recipe/recipe_detail-partial.html", 
                context={'posts': posts, 'category':category, 'post':post}
            )
            data_dict = {"html_from_view": html}
            return JsonResponse(data=data_dict, safe=False)

    return render(request, 'recipe/recipe_list.html', context=ctx)

def recipe_new(request):
    category = Category.objects.all()
    if request.method == "POST":
        form = PostForm(request.POST,request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('users_detail',pk=request.user.pk)
    else:
        form = PostForm()
    return render(request, 'recipe/recipe_edit.html', {'form': form, 'category':category})

def recipe_edit(request, pk):
    category = Category.objects.all()
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('users_detail',pk=request.user.pk)
    else:
        form = PostForm(instance=post)
    return render(request, 'recipe/recipe_edit.html', {'form': form, 'category':category})

    

def users_detail(request, pk):
    current_user = request.user
    user = get_object_or_404(User, pk=pk)
    posts = user.post_set.all().order_by('-created_date')
    articles = user.article_set.all().order_by('-created_date')
    ctx={'posts': posts, 'user':user, current_user:'current_user',"articles":articles}
    if request.GET.get("s") :
        url_parameter3 = request.GET.get("s")
        if url_parameter3:
            post = Post.objects.get(pk=url_parameter3)
        ctx={'posts': posts, 'user':user, 'post':post, 'current_user':current_user,"articles":articles}

        if request.is_ajax():
            html = render_to_string(
                template_name="recipe/user_recipe_partial.html", 
                context={'posts': posts, 'user':user, 'post':post, 'current_user':current_user,"articles":articles}
            )
            data_dict = {"html_from_view": html}
            return JsonResponse(data=data_dict, safe=False)
    return render(request, 'recipe/users_detail.html', context=ctx)


def recipe_delete(request,pk):
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        raise Http404
    if request.user == post.author:
        post.delete()
    return redirect('users_detail',pk=request.user.pk)

def article_new(request):
    if request.method == "POST":
        form = ArticleForm(request.POST)
        if form.is_valid():
            article = form.save(commit=False)
            article.author = request.user
            article.save()
            return redirect('users_detail',pk=request.user.pk)
    else:
        form = ArticleForm()
    return render(request, 'recipe/article_edit.html', {'form': form})

def article_edit(request, pk):
    article = get_object_or_404(Article,  pk=pk)
    form = ArticleForm(request.POST, instance=article)
    if request.method == "POST":
        if form.is_valid():
            article = form.save(commit=False)
            article.author = request.user
            article.save()
            return redirect('users_detail',pk=request.user.pk)
    return render(request, 'recipe/article_edit.html', {'form': form})


def article_detail(request, pk):
    article = get_object_or_404(Article,  pk=pk)
    current_user = request.user
    return render(request, 'recipe/article_detail.html', {"article":article,"current_user":current_user})

def article_list(request):
    articles = Article.objects.all();
    return render(request, 'recipe/article_list.html', {"articles":articles})

def article_delete(request,pk):
    try:
        article = Article.objects.get(pk=pk)
    except Article.DoesNotExist:
        raise Http404
    if request.user == article.author:
        article.delete()
    return redirect('article_list',pk=request.user.pk)