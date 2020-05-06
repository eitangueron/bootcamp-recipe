const express = require('express')
const path = require('path')
const urllib = require('urllib')

const app = express()



app.use(express.static(path.join(__dirname,'/dist')))
app.use(express.static(path.join(__dirname,'/node_modules')))



app.get('/recipes/:ingredient',function(req,res){
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,function(err,response){
        const recipes = JSON.parse(response.toString()).results
        if(recipes.length===0){
            res.send('failed')
        } else {
            const results = recipes.map(recipe => ({
                title: recipe.title,
                thumbnail: recipe.thumbnail,
                href: recipe.href,
                ingredients: recipe.ingredients}))
            const maxNumOfRecipes = 9
            res.send(results.slice(0,maxNumOfRecipes-1))   //array! ** notice returning just 9 items right now!
        }
    })
})


const port = 8080
app.listen(port,function(){
    console.log(`Server is running smoooothh, port: ${port}`)
})