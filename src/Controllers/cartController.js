

const{getCart} = require('../Service/CartService');
const AppError = require('../utils/appError');



async function getCartByUser(req,res){
    try{
        const cart = await getCart(req.user.id);
        return res.status(200).json({
            success:true,
            message:"succesfully fetched the cart",
            error:{},
            data:cart
        })
        }catch(error){
            console.log(error);
            if(error instanceof AppError){
                return res.status(error.statusCode).json({
                    success:false,
                    message:error.message,
                    error:error,
                    data:{}
                })
            }

            return res.status(500).json({
                success:false,
                message:"something went wrong",
                error:error,
                data:{}
            })

        }
    }

    module.exports = {
        getCartByUser
    }
