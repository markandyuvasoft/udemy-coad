const bodyParser = require('body-parser')
const path = require('path')
const expressHbs = require('express-handlebars')


const express = require('express')


const adminData = require('../express/routes/admin.js')
const shopRoutes = require('../express/routes/shop.js')

const app= express()

app.engine('hbs',expressHbs({layoutsDir:'views/layouts', defaultLayout: 'main-layout', extname: 'hbs'}))
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin',adminData.routes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))

    res.status(404).render('404',{pageTitle: 'Page Not Found'})

})

app.listen(3000)