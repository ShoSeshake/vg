document.addEventListener("DOMContentLoaded", function() {
    // var elem = document.getElementById('new_post');
    // elem.addEventListener('click', function() {
    //     anime({
    //         targets: elem,
    //         keyframes: [
    //             { translateY: -40 },
    //             { translateX: 250 },
    //             { translateY: 40 },
    //             { translateX: 0 },
    //             { translateY: 0 }
    //         ],
    //         duration: 4000,
    //         easing: 'easeOutElastic(1, .8)',
    //         loop: true
    //     })
    // });
    var title = document.getElementById('header-title');
    var about_us = document.getElementById('about_us');
    var about_x = document.getElementById('about_x');
    title.addEventListener('click', function() {
        about_us.classList.add('is-show');
    });

    about_x.addEventListener('click', function() {
        about_us.classList.remove('is-show');
    });

    var user = document.getElementById('user');
    var p_user = document.getElementById('p_user');
    var login = document.getElementById('login');
    var p_signup = document.getElementById('p_signup');
    user.addEventListener('click', function() {
        p_user.classList.add('hidden');
        login.classList.add('is-show');
        p_signup.classList.add('is-show');
    });

    var recipe = document.getElementById('recipe');
    var news = document.getElementById('news');
    var p_menu = document.getElementById('p_menu');
    var p_close = document.getElementById('p_close');
    var p_recipe = document.getElementById('p_recipe');
    var p_recipe_detail = document.getElementById('p_recipe_detail');
    var p_news = document.getElementById('p_news');
    var p_news_detail = document.getElementById('p_news_detail');
    p_menu.addEventListener('click', function() {
        recipe.classList.add('is-show');
        news.classList.add('is-show');
        p_menu.classList.add('hidden');
        p_close.classList.add('visible');
    });

    p_close.addEventListener('click', function() {
        recipe.classList.remove('is-show');
        news.classList.remove('is-show');
        p_menu.classList.remove('hidden');
        p_close.classList.remove('visible');
    });

    var add_recipe = (function() {
        p_recipe.classList.add('hidden');
        p_recipe_detail.classList.add('visible');
    });
    recipe.addEventListener('mouseover', function() {
        recipe.classList.add('detail');
        setTimeout(add_recipe, 800);
    });


    var remove_recipe = (function() {
        recipe.classList.remove('detail');
        p_recipe.classList.remove('hidden');
        p_recipe_detail.classList.remove('visible');
    });

    recipe.addEventListener('mouseleave', function() {
        p_recipe_detail.classList.remove('visible');
        setTimeout(remove_recipe, 800);
    });

    var add_news = (function() {
        p_news.classList.add('hidden');
        p_news_detail.classList.add('visible');
    });
    news.addEventListener('mouseover', function() {
        news.classList.add('detail');
        setTimeout(add_news, 1200);
    });


    var remove_news = (function() {
        news.classList.remove('detail');
        p_news.classList.remove('hidden');
        p_news_detail.classList.remove('visible');
    });
    news.addEventListener('mouseleave', function() {
        p_news_detail.classList.remove('visible');
        setTimeout(remove_news, 1200);
    });
    var username_info = document.getElementById('username_info');
    var password_info = document.getElementById('password_info');
    var signup_title = document.getElementById('signup_title');

    var disappear_info = (function() {
        username_info.classList.remove('is-show');
        password_info.classList.remove('is-show');
    });

    signup_title.addEventListener('click', function() {
        username_info.classList.add('is-show');
        password_info.classList.add('is-show');
        setTimeout(disappear_info, 10000);
    });

});