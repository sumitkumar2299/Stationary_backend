// const Order = require('../schema/OrderSchema');
// const BadRequestError = require('../utils/badRequestError');
// const InternalServerError = require('../utils/internalServerError');

// async function createNewOrder(orderDetails){
//     try{
//         const order = await Order.create(orderDetails);
//         console.log(order);
//         return order;
//     }catch(error){
//         if(error.name === "validationError"){
//             const errorMessageList = Object.keys(error.errors).map((property)=>{
//                 return error.errors[property].message;
//             })
//             throw new BadRequestError(errorMessageList)
//         }
//         console.log(error);
//         console.log("hello from repository catch block");
//         throw new InternalServerError();
//     }
// }

// module.exports = {
//     createNewOrder
// }







// const Order = require("../schema/orderSchema");
const Order = require('../schema/OrderSchema')

const BadRequestError = require("../utils/badRequestError");
const InternalServerError = require("../utils/internalServerError");
 
 async function createNewOrder(orderDetails) {
     try {
         const order = await Order.create(orderDetails);
         return order;
     } catch(error) {
         if(error.name === 'ValidationError') {
 
             const errorMessageList = Object.keys(error.errors).map((property) => {
                 return error.errors[property].message;
             })
             throw new BadRequestError(errorMessageList);
            

         } 
         console.log(error);
        //  throw new InternalServerError();
        throw new InternalServerError();
     }
 }
 
 module.exports = {
     createNewOrder
 }