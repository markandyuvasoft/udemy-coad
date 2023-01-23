const path = require('path')
const express = require('express')

const rootDir = require('../../express/util/path.js')

const adminData = require('./admin')


const router = express.Router()

router.get('/',(req,res,next)=>{
    // res.send("<h1>hello from express</h1>")    .............normal

    // console.log('shop.js',adminData.products); ..............html
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))....html

    const products = adminData.products

    res.render('shop',{prods: products, docTitle:'shop', path:'/', hasProducts:products.length>0, activeShop:true, productCSS:true})


})



module.exports =router
