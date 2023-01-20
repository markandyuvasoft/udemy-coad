const bodyParser = require('body-parser')
const express = require('express')

const adminRoutes = require('../express/routes/admin.js')
const shopRoutes = require('../express/routes/shop.js')


const app= express()


app.use(bodyParser.urlencoded({extended:false}))





app.use(shopRoutes)
app.use(adminRoutes)


app.listen(3000)