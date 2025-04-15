const Cart = require('../schema/cartSchema');
const InternalServerError = require('../utils/internalServerError')
const NotFoundError = require('../utils/NotFoundError');

async function createcart(userId){
    try{
        const newCart = await Cart.create({
            user:userId  // is user ke liye ek khali cart bana do.
        });
        return newCart;
    }catch(error){
        if(error.name === "ValidatonError"){
            const errorMessageList = object.keys(error.errors).map((property)=>{
                return error.errors[property].message;
            })
            throw new InternalServerError();
        }
    }
}


async function getCartByUserId(userId){
    try{
        const cart = await Cart.findOne({
            user:userId //iske liye ek khali cart bana do
        }).populate('items.product');  //.populate() ka kaam hai reference wale ObjectId ko full document mein convert kar dena.
        return cart;
    }catch(error){
        console.log(error);
        throw new InternalServerError();
    }
}

async function clearCart(userId){
    try{
        const cart = await Cart.findOne({
            user:userId
        });
        if(!cart){
            throw new NotFoundError('Cart');
        }

        cart.items = [];

        await cart.save();
        return cart;
    }catch(error){
        throw new InternalServerError();
    }
}


module.exports = {
    createcart,
    getCartByUserId,
    clearCart
}