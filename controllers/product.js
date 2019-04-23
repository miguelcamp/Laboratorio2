var Product = require('../models/product');

//Get
exports.test = function (req, res) {
    res.statusCode=418;
    res.send('No se puede hacer cafe por que soy una tetera');
};
//Post
exports.product_create = function (req, res) {
    var product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Producto creado')
    })
};
//Get
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};
//Put
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product updated');
    });
};
//Delete
exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Product Deleted');
    })
};
exports.product_index = function(req,res){
        res.sendFile('C:\Users\migue\Documents\Sis Web 1\ProductsApp-master\index.html');

};