
const{getCartByUserId} = require('../Repository/CartRepository')
const{getProductById} = require('../Repository/productRepository');
const AppError = require('../utils/appError');
const BadRequestError = require('../utils/badRequestError');
const NotFoundError = require('../utils/NotFoundError');

async function getCart(userId){
    const cart = await getCartByUserId(userId);

    if(!cart) {
        throw new NotFoundError("cart");
    }

    return cart;
}

async function modifyCart(userId, productId,shouldAdd = true){
    const quantityValue = (shouldAdd===true)? 1:-1;
    const cart = await getCart(userId);
    const product = await getProductById(productId);
    console.log("checking product",product);

    if(!product){
        throw new NotFoundError("product");
    }
    if(!product.inStock && product.quantity <=0){
        throw new BadRequestError(["product not available in stock"]);
    }

    // May be the product is already in the cart 

    let foundProduct = false;
    cart.items.forEach(item=>{
        console.log(item)
        if(item.product.id == productId){
            if(shouldAdd){
                if(product.quantity >= item.quantity+1)
                    item.quantity += quantityValue;
                else
                throw new AppError("The quantity of the item requested is not available",404)
            } else{
                if(item.quantity>0){
                    item.quantity += quantityValue;
                    if(item.quantity == 0){
                        cart.items= cart.items.filter(item => item.product.id!= productId);
                        foundProduct = true;
                        return;
                    }
                }
                else
                throw new AppError("The quantity of the item requested is not available",404)
            }
            foundProduct = true;
        }

  });
  if(!foundProduct){
    if(shouldAdd){
        cart.items.push({
            product:productId,
            quantity:1
        })
    } else{
        throw new NotFoundError("product in the cart");
    }
  }
  await cart.save();
  return cart;
}







module.exports = {
    getCart,
    modifyCart
}