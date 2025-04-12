const cloudinary = require('../Config/cloudinaryConfig');
const ProductRepository = require('../Repository/productRepository');
const fs = require('fs/promises');


async function createProduct(productDetails){
    // we should check if an image is coming to create the product, then we should first 
    // upload it on cloudinary 

    const imagePath = productDetails.imagePath;
    if(imagePath){
        try{
            const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
            var productImage = cloudinaryResponse.secure_url;
            await fs.unlink(imagePath)
        }catch(error){
            console.log(error);
            throw{reason:'not able to create product',statusCode:500};
        }

        console.log('checking image path')

        
    }

    // then use the url from cloudinary and other product details to add in db

    const product = await ProductRepository.createProduct({
        ...productDetails,
        productImage:productImage
    });
    console.log(product);

    if(!product){
        throw{reason:'Not able to create product',statusCode:500}
    }

    return product

}

module.exports = {
    createProduct
}
