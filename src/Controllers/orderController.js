// const {createOrder} = require('../Service/OrderService');
// const AppError = require('../utils/appError');


// async function createNewOrder(req,res){
//     try{
//         const order = await createOrder(req.user.id,req.body.paymentMethod);
//         console.log(order);
//         return res.status(201).json({
//             success:true,
//             message:"Successfully created the order",
//             error:{},
//             data:order
//         })
//     } catch(error){
//         console.log("loging from catch part in the controller")
//         console.log(error);
//         if(error instanceof AppError){
//             return res.status(error.statusCode).json({
//                 success:false,
//                 message:error.message,
//                 error:error,
//                 data:{}
//             })
//         }
//         return res.status(500).json({
//             success:false,
//             message:"something went wrong",
//             error:error,
//             data:{}
//         })
//     }
// }


// module.exports = {
//     createNewOrder
// }






// controller layer 


const { createOrder } = require("../services/orderService");
 const AppError = require("../utils/appError");

 console.log("hey from controller layer");
 
 async function createNewOrder(req, res) {
     try {
         const order = await createOrder(req.user.id, req.body.paymentMethod);
         
         return res.status(201).json({
             success: true,
             message: "Successfully created the order",
             error: {},
             data: order
         })
     } catch(error) {
         console.log(error);
         if(error instanceof AppError) {
             return res.status(error.statusCode).json({
                 success: false,
                 message: error.message,
                 error: error,
                 data: {}
             })
         }
         return res.status(500).json({
             success: false,
             message: "Something went wrong",
             error: error,
             data: {}
         })
     }
 }
 
 module.exports = {
     createNewOrder
 }