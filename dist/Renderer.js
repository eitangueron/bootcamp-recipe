const source = $('#recipe-template').html()
const template = Handlebars.compile(source)

class Renderer{
    
    render(data){
       const newHTML = template(data)
       $('body').append(newHTML)
    }
}

