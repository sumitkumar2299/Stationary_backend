// // const {getCartByUserId, clearCart} = require('../Repository/CartRepository');
// // const{findUser} = require('../Repository/userRepository');
// // const{createNewOrder} = require('../Repository/OrderRepository');
// // const NotFoundError = require('../utils/NotFoundError');
// // const BadRequestError = require('../utils/badRequestError');
// // const InternalServerError = require('../utils/internalServerError');



// // async function createOrder(userId,paymentMethod){

// //     const cart = await getCartByUserId(userId);
// //     const user = await findUser({id:cart.user});
// //     console.log(cart);
// //     console.log(user);

// //     if(!cart){
// //         throw new NotFoundError('Cart');
// //     }

// //     if(cart.items.length === 0){
// //         throw new BadRequestError(["cart is empty please add some items to the cart"]);
// //     }

// //     const orderObject = {};
// //     orderObject.user = cart.user;
// //     orderObject.items = cart.items.map(cartitem=>{
// //         return {
// //             product:cartitem.product.id,
// //             quantity:cartitem.quantity
// //         }
// //     });

// //     orderObject.status = "ORDERED";
// //     orderObject.totalPrice = 0;

// //     cart.items.forEach((cartitem)=>{
// //         orderObject.totalPrice = cartitem.quantity*cartitem.product.price;
// //     });

// //     orderObject.address = user.address;
// //     orderObject.paymentMethod = paymentMethod;

// //     const order = await createNewOrder(orderObject);

// //     if(!order){
// //         throw new InternalServerError
// //     }

// //     await clearCart(userId);

// //     return order;
// // }

// // module.exports = {
// //     createOrder
// // }








// // service  layer


// const { getCartByUserId, clearCart } = require("../repositories/cartRepository");
//  const NotFoundError = require("../utils/NotFoundError");
// //  const BadRequestError = require('../utils/badRequestError');
//  const { findUser } = require("../repositories/userRepository");
//  const { createNewOrder } = require("../repositories/orderRepository");
//  const InternalServerError = require("../utils/internalServerError");
// const BadRequestError = require("../utils/badRequestError");
 
//  async function createOrder(userId, paymentMethod) {
 
     
//      const cart = await getCartByUserId(userId);
//      const user = await findUser({ _id: cart.user});
//      console.log(cart);
//      console.log(user);
//      if(!cart) {
//          throw new NotFoundError("Cart");
//      }
 
//      if(cart.items.length === 0) {
       
//         throw new BadRequestError(["Cart is empty, please add some items to the cart"]);
//      }
 
//      const orderObject = {};
 
//      orderObject.user = cart.user;
//      orderObject.items = cart.items.map(cartitem => {
//          return {product: cartitem.product._id, quantity: cartitem.quantity}
//      });
 
//      orderObject.status = "ORDERED";
//      orderObject.totalPrice = 0;
 
//      cart.items.forEach((cartItem) => {
//          orderObject.totalPrice += cartItem.quantity * cartItem.product.price;
//      });
 
//      orderObject.address = user.address;
//      orderObject.paymentMethod = paymentMethod;
 
//      const order = await createNewOrder(orderObject);
 
//      if(!order) {
//          throw new InternalServerError();
//      }
 
//      await clearCart(userId);
 
//      return order;
 
//  }
 
//  module.exports = {
//      createOrder
//  }








// gpt mode 


const { getCartByUserId, clearCart } = require('../Repository/CartRepository');
const { findUser } = require('../Repository/userRepository');
const { createNewOrder } = require('../Repository/OrderRepository');
const NotFoundError = require('../utils/NotFoundError');
const BadRequestError = require('../utils/badRequestError');
const InternalServerError = require('../utils/internalServerError');

async function createOrder(userId, paymentMethod) {
    // 1. Get Cart
    const cart = await getCartByUserId(userId);
    if (!cart) {
        throw new NotFoundError('Cart not found');
    }

    // 2. Check if cart has items
    if (cart.items.length === 0) {
        throw new BadRequestError(['Cart is empty. Please add some items.']);
    }

    // 3. Get user
    const user = await findUser({ id: cart.user });
    if (!user) {
        throw new NotFoundError('User not found');
    }

    // 4. Create order object
    const orderObject = {
        user: userId, // ✅ Only ObjectId, NOT full object
        items: cart.items.map(cartItem => ({
            product: cartItem.product.id,
            quantity: cartItem.quantity
        })),
        status: "ORDERED",
        totalPrice: 0,
        address: user.address,
        paymentMethod: paymentMethod
    };

    // 5. Calculate total price
    cart.items.forEach(cartItem => {
        orderObject.totalPrice += cartItem.quantity * cartItem.product.price;
    });

    // 6. Save to DB
    const order = await createNewOrder(orderObject);
    if (!order) {
        throw new InternalServerError();
    }

    // 7. Clear cart
    await clearCart(userId);

    // 8. Return final order
    return order;
}

module.exports = {
    createOrder
};

