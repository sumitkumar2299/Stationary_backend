const Cart = require('../schema/cartSchema');
const InternalServerError = require('../utils/internalServerError')

async function createcart(userId){
    try{
        const newCart = await Cart.create({
            user:userId  // is user ke liye ek khali cart bana do.
        });
        return newCart
    }catch(error){
        if(error.name === "ValidatonError"){
            const errorMessageList = object.keys(error.errors).map((property)=>{
                return error.errors[property].message;
            })
            // throw new InternalServerError();
        }
    }
}


async function getCartByUserId(userId){
    try{
        const cart = await Cart.findOne({
            user:userid
        });
        return cart;
    }catch(error){
        console.log(error);
        throw new InternalServerError();
    }
}


module.exports = {
    createcart,
    getCartByUserId
}