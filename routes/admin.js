const path = require('path')
const express = require('express')

const rootDir = require('../../express/util/path.js')

const router = express.Router()


const products = []


router.get('/addProduct',(req,res,next)=>{
    // res.sendFile(path.join(rootDir, 'views', 'add-Product.html'))

    res.render('add-Product', {pageTitle: 'Add Product', path: '/admin/add-Product', formsCSS:true , productCSS:true, activeAddProduct: true})
   
})


router.post('/addProduct', (req,res,next)=>{

    // console.log(req.body);

    products.push({title: req.body.title})

    res.redirect('/')
})

// module.exports =router

exports.routes = router
exports.products = products