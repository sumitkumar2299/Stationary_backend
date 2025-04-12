const Product = require('../schema/ProductSchema');
async function createProduct(productDetails){
    try{
        const response = await Product.create(productDetails);
        return response;
    } catch(error){
        console.log(error);
    }
}

module.exports = {
    createProduct
}