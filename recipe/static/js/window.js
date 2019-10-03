$(function() {
    var login_form = document.getElementById('login_form');
    var detailBlock = $("#detail_block");
    var recipeBlock = $("#recipe_block");
    var bg_color = document.getElementById('bg_color');
    var loading = document.getElementById('loading');
    var listAll = document.getElementById('list_all');
});
if (window.location.href.match(/\/accounts\/login/) || window.location.href.match(/\/accounts\/create/)) {
    $(window).on('load', function() {
        login_form.classList.add('is-show');

    });
} else if (window.location.href.match(/\/recipe\/list/)) {
    $(window).on('load', function() {
        var detailBlock = $("#detail_block");
        var recipeBlock = $("#recipe_block");
        var headerTitle = $(".header-title");
        var circles = $('#undecided, #menu, #user');
        circles.remove();
        headerTitle.remove();
        detailBlock.empty();
        recipeBlock.empty();

        anime({
            targets: circles,
            translateY: -1000,
            easing: 'easeInOutSine',
            duration: 500,
        });
        anime({
            targets: loading,
            translateY: -1000,
            easing: 'easeInOutSine',
            duration: 500,
        });

        var bg_in = (function() {
            anime({
                targets: bg_color,
                translateY: 1000,
                easing: 'easeInOutSine',
                direction: 'reverse',
                duration: 1000,
            })
        });
        var listAll = document.getElementById('list_all');
        anime({
            targets: listAll,
            translateY: 3000,
            easing: 'easeInOutSine',
            direction: 'reverse',
            duration: 3000,
        })
        setTimeout(bg_in, 1000);
    });

} else {
    $(window).on('load', function() {
        anime({
            targets: loading,
            translateY: -1000,
            easing: 'easeInOutSine',
            duration: 500,
        });
        var bg_in = (function() {
            anime({
                targets: bg_color,
                translateY: 1000,
                easing: 'easeInOutSine',
                direction: 'reverse',
                duration: 1000,
            })
        });
        setTimeout(bg_in, 1000);
    });
}
$(function() {
    $("a").on('click', function(event) {
        event.preventDefault();
        var linkUrl = $(this).attr('href');
        var bg_color = document.getElementById('bg_color');
        anime({
            targets: bg_color,
            translateY: 1000,
            easing: 'easeInOutSine',
            duration: 500,
        });
        var loading = document.getElementById('loading');
        anime({
            targets: loading,
            translateY: 0,
            easing: 'easeInOutSine',
            duration: 1000,
        })

        function action() {
            location.href = linkUrl;
        }
        setTimeout(action, 2000);
    });
});