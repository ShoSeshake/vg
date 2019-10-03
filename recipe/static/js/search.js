// レシピリスト
$(function() {
    var $options = $('[id^=option-]');
    const recipeBlock = $("#recipe_block");
    const endpoint = '/recipe/list/'
    const delay_by_in_ms = 0
    let scheduled_function = false

    let ajax_call = function(endpoint, request_parameters) {
        $.getJSON(endpoint, request_parameters)
            .done(response => {
                recipeBlock.html(response['html_from_view'])
            })
            .fail(function() {
                alert('メッセージ、または画像を入力してください');
            });
    }


    $options.on('click', function() {
        const request_parameters = {
            q: $(this).val()
        }
        if (scheduled_function) {
            clearTimeout(scheduled_function)
        }
        scheduled_function = setTimeout(ajax_call, delay_by_in_ms, endpoint, request_parameters)

        // ここからrecipe_detail
        $(document).ajaxStop(function() {

            var $recipes = $('.recipe_list_image');
            const detailBlock = $("#detail_block");
            const endpoint = '/recipe/list/'
            const delay_by_in_ms = 0
            let scheduled_function = false

            let ajax_detail = function(endpoint, request_parameter) {
                $.getJSON(endpoint, request_parameter)
                    .done(response => {
                        detailBlock.fadeTo('fast', 0).promise().then(() => {
                            detailBlock.html(response['html_from_view'])
                            detailBlock.fadeTo('fast', 1)
                        })
                    })
                    .fail(function() {
                        alert('Failed');
                    });
            }


            $recipes.on('click', function() {
                var id = $(this).attr("id");

                const request_parameter = {
                    p: id
                }
                if (scheduled_function) {
                    clearTimeout(scheduled_function)
                }
                scheduled_function = setTimeout(ajax_detail, delay_by_in_ms, endpoint, request_parameter)
            })
        })
    })
})