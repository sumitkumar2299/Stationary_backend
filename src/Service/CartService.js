const {getCartByUserId} = require('../Repository/CartRepository');
const NotFoundError = require('../utils/NotFoundError');

async function getCart(userId){
    const cart = await getCartByUserId(userId);

    if(!cart) {
        // throw new NotFoundError("cart");
    }

    return cart;
}

module.exports = {
    getCart
}