const cloudinary = require('../Config/cloudinaryConfig');
const ProductRepository = require('../Repository/productRepository');
const fs = require('fs/promises');
const internalServerError = require('../utils/internalServerError');
const NotFoundError = require('../utils/internalServerError')


async function createProduct(productDetails){
    // we should check if an image is coming to create the product, then we should first 
    // upload it on cloudinary 

    const imagePath = productDetails.imagePath;
    if(imagePath){
        try{
            const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
            var productImage = cloudinaryResponse.secure_url;
            console.log(productImage);
            await fs.unlink(imagePath)
        }catch(error){
            console.log(error);
            throw new internalServerError();
        }

        console.log('checking image path')

        
    }

    // then use the url from cloudinary and other product details to add in db

    const product = await ProductRepository.createProduct({
        ...productDetails,
        productImage:productImage
    });
    
    console.log(product);

    return product;


}

async function getProductById(productId){
    const response = await ProductRepository.getProductById(productId);
    if(!response){
        throw new NotFoundError('product');
    }
    return response;
}


async function deleteProductById(productId){
    const response = await
    ProductRepository.deleteProductById(productId);
    if(!response){
        throw new NotFoundError('product');
    }
    return response;
}

module.exports = {
    createProduct,
    getProductById,
    deleteProductById
}
