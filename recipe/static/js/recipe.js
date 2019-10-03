$(function() {
    // 説明書き
    var title = document.getElementById('header-title');
    title.addEventListener('mouseover', function() {
        title.classList.add('pointed');
    });

    title.addEventListener('mouseleave', function() {
        title.classList.remove('pointed');
    });

    var about_us = document.getElementById('about_us');
    var about_x = document.getElementById('about_x');

    title.addEventListener('click', function() {
        about_us.classList.add('is-show');
    });

    about_x.addEventListener('click', function() {
        about_us.classList.remove('is-show');
    });

    // ユーザ丸ボタン

    var user = $('#user');
    var login = $('#login');
    var mypage = $('#mypage');
    var logout = $('#logout');
    var new_recipe = $('#new');
    var article = $('#article');
    user.on('click', function() {
        user.addClass('hidden');
        logout.addClass('is-show');
        login.addClass('is-show');
        mypage.addClass('is-show');
        new_recipe.addClass('is-show');
        article.addClass('is-show');
    });

    login.on('click', function() {
        login.addClass('open');
    });
    mypage.on('click', function() {
        mypage.addClass('open');
    });

    logout.on('click', function() {
        logout.addClass('open');
    });
    new_recipe.on('click', function() {
        new_recipe.addClass('open');
    });
    article.on('click', function() {
        article.addClass('open');
    });

    // メニュー表示

    var recipe = document.getElementById('recipe');
    var news = document.getElementById('news');
    var menu = document.getElementById('menu');
    var close = document.getElementById('close');
    var p_recipe = document.getElementById('p_recipe');
    var p_recipe_detail = document.getElementById('p_recipe_detail');
    var p_news = document.getElementById('p_news');
    var p_news_detail = document.getElementById('p_news_detail');


    menu.addEventListener('click', function() {
        recipe.classList.add('is-show');
        news.classList.add('is-show');
        menu.classList.add('hidden');
        close.classList.add('visible');
    });

    close.addEventListener('click', function() {
        recipe.classList.remove('is-show');
        news.classList.remove('is-show');
        menu.classList.remove('hidden');
        close.classList.remove('visible');
    });

    var add_recipe = (function() {
        p_recipe.classList.add('hidden');
        p_recipe_detail.classList.add('visible');
    });
    recipe.addEventListener('mouseover', function() {
        recipe.classList.add('detail');
        setTimeout(add_recipe, 1000);
    });

    recipe.addEventListener('click', function() {
        recipe.classList.add('open');
    });

    news.addEventListener('click', function() {
        news.classList.add('open');
    });


    var remove_recipe = (function() {
        recipe.classList.remove('detail');
        p_recipe.classList.remove('hidden');
        p_recipe_detail.classList.remove('visible');
    });

    recipe.addEventListener('mouseleave', function() {
        p_recipe_detail.classList.remove('visible');
        setTimeout(remove_recipe, 1000);
    });

    var add_news = (function() {
        p_news.classList.add('hidden');
        p_news_detail.classList.add('visible');
    });
    news.addEventListener('mouseover', function() {
        news.classList.add('detail');
        setTimeout(add_news, 1000);
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
});


// ポストフォーム用

$(function() {
    var category = $('#category');
    var category_btn = $('#category_btn');
    category_btn.on('click', function() {
        category.addClass('is-show');
    });
});
// レシピが現れるアニメーション

document.addEventListener("DOMContentLoaded", function() {
    function showElementAnimation() {

        var element = document.getElementsByClassName('recipe_image');
        if (!element) return;

        var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
        var scrollY = window.pageYOffset;
        var windowH = window.innerHeight;

        for (var i = 0; i < element.length; i++) {
            var elemClientRect = element[i].getBoundingClientRect();
            var elemY = scrollY + elemClientRect.top;
            if (scrollY + windowH - showTiming > elemY) {
                element[i].classList.add('is-show');
            } else if (scrollY + windowH < elemY) {
                element[i].classList.remove('is-show');
            }
        }
    }
    showElementAnimation();
    window.addEventListener('scroll', showElementAnimation);
});
// ブランドアイコン
$(function() {
    var facebook = $('#facebook');
    var fb = $('#fb');
    var instagram = $('#instagram');
    var ig = $('#ig');
    var twitter = $('#twitter');
    var twt = $('#twt');
    facebook.on('mouseover', function() {
        facebook.addClass('is-show');
        fb.addClass('is-show');
    })
    instagram.on('mouseover', function() {
        instagram.addClass('is-show');
        ig.addClass('is-show');
    })
    twitter.on('mouseover', function() {
        twitter.addClass('is-show');
        twt.addClass('is-show');
    })
    facebook.on('mouseleave', function() {
        facebook.removeClass('is-show');
        fb.removeClass('is-show');
    })
    instagram.on('mouseleave', function() {
        instagram.removeClass('is-show');
        ig.removeClass('is-show');
    })
    twitter.on('mouseleave', function() {
        twitter.removeClass('is-show');
        twt.removeClass('is-show');
    })
});
// マイページのメニュー変更
$(function() {
        var recipe_content = $('#recipe_content');
        var recipe_render = $('#recipe_render');
        var content = $('#content');
        var recipe_btn = $('#user_recipe_btn');
        var article_btn = $('#user_article_btn');
        var article_show = (function() {
            content.addClass('is-show');
        })
        var recipe_show = (function() {
            recipe_content.removeClass('hidden');
            recipe_render.removeClass('hidden');
        })
        article_btn.on('click', function() {
            recipe_content.addClass('hidden');
            recipe_render.addClass('hidden');
            setTimeout(article_show, 1000);
        })
        recipe_btn.on('click', function() {
            content.removeClass('is-show');
            setTimeout(recipe_show, 1000);
        })
    })
    // indexの画像強調
$(function() {
    var div_image = $('.recipe_image_index')
    var recipe_image = $('.image_index')
    var news_index = $('.news_index')

    recipe_image.on('mouseover', function() {
        div_image.addClass('pointed');
        recipe_image.addClass('pointed');
        news_index.addClass('pointed');
    })
    recipe_image.on('mouseleave', function() {
        div_image.removeClass('pointed');
        recipe_image.removeClass('pointed');
        news_index.removeClass('pointed');
    })
})