renderer = new Renderer()


$('#search-button').click(function(){
    const ingredient = $('#ingredient-input').val()
    $('#ingredient-input').val('')
    $.get(`/recipes/${ingredient}`,function(responseData){
        $('#recipes-container').empty()
        if (responseData === 'failed'){
            $('#recipes-container').append('<h2>Sorry, we could not find any matching recpies for this ingredient :(<br>Check your spelling and try again!</h2>')
        } else {
            for(let recipe of responseData){
                renderer.render(recipe)
            }
        }
    })
})

