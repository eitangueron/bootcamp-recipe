const express = require('express')
const path = require('path')
const urllib = require('urllib')

const app = express()



app.use(express.static(path.join(__dirname,'/dist')))
app.use(express.static(path.join(__dirname,'/node_modules')))



app.get('/sanity',function(req,res){
    console.log("OK")
})

app.get('/recipes/:ingredient',function(req,res){
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,function(err,response){
        const recipes = JSON.parse(response.toString()).results
        const results = recipes.map(recipe => ({
            title: recipe.title,
            thumbnail: recipe.thumbnail,
            href: recipe.href,
            ingredients: recipe.ingredients}))
        res.send(results[0])   //array! ** notice returning just Index 0 right now!
    })
})


const port = 8080
app.listen(port,function(){
    console.log(`Server is running smoooothh, port: ${port}`)
})