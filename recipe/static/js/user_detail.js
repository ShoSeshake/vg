$(function() {
    var $recipe_id = $('.recipe_image');
    const recipeText = $("#recipe_render");
    const endpoint = window.location.href
    const delay_by_in_ms = 0
    let scheduled_function = false

    let ajax_call = function(endpoint, request_parameters) {
        $.getJSON(endpoint, request_parameters)
            .done(response => {
                recipeText.fadeTo('slow', 0).promise().then(() => {
                    recipeText.html(response['html_from_view'])
                    recipeText.fadeTo('slow', 1)
                })
            })

        .fail(function() {
            alert('メッセージ、または画像を入力してください');
        });
    }


    $recipe_id.on('click', function() {
        console.log('success');
        id = $(this).attr("id");
        const request_parameters = {
            s: id
        }
        if (scheduled_function) {
            clearTimeout(scheduled_function)
        }
        scheduled_function = setTimeout(ajax_call, delay_by_in_ms, endpoint, request_parameters)
    })
});