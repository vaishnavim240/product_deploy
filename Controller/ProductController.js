const Product = require('../model/Product');


exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find()
        res.json(products)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleProduct = async (req, res) =>{
    try {
        const product = await Product.findOne({prodid: req.params.id})
        if(!product)
            return res.status(404).json({msg: 'Product Not found'})
        
        res.json(product)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}
exports.addNewProduct = async(req, res) =>{
    try{
        const product = await Product.findOne({prodid: req.body.prodid})
        if(!product){
            const addedProduct = await Product.create(req.body)
            res.json(addedProduct)
        }
        else{
            res.json({msg: 'Product already exixts'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}
exports.updateProduct = async (req, res) =>{
    try{
        const product = req.body
        const fetchedProduct = await Product.findOne({prodid: product.prodid})
        if(fetchedProduct){
            await Product.updateOne({prodid: product.prodid},product)
            res.json(fetchedProduct)
        }
        else{
            res.json({msg: 'Product doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}

exports.deleteProduct = async (req, res)=>{
    try{
        const product = await Product.findOne({prodid: req.params.id})
        if(product){
            await Product.deleteOne({prodid:product.prodid})
            res.json(product)
        }
        else{
            res.json({msg: 'product doesnt exists'})
        }
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}

