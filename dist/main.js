renderer = new Renderer()


$('#search-button').click(function(){
    const ingredient = $('#ingredient-input').val()
    $.get(`/recipes/${ingredient}`,function(responseData){
        console.log(responseData)
        renderer.render(responseData)
    })
})

