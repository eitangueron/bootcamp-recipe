renderer = new Renderer()


$('#search-button').click(function(){
    const ingredient = $('#ingredient-input').val()
    $('#ingredient-input').val('')
    $.get(`/recipes/${ingredient}`,function(responseData){
        $('#recipes-container').empty()
        for(let recipe of responseData){
            renderer.render(recipe)
        }
    })
})

