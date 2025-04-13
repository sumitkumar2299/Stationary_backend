

const{getCart,addToCart,modifyCart} = require('../Service/CartService');
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


    async function modifyProductTocart(req,res){
        try{
            const cart = await modifyCart(req.user.id,req.params.productId,req.params.operation == "add");
            return res.status(200).json({
                success:true,
                message:'successfully added to product to the cart',
                error:{},
                data:cart
            })
        } catch(error){
            console.log(error);
            if(error instanceof AppError){
                return res.status(error).json({
                    success:false,
                    message:error.message,
                    error:error,
                    data:{}
                })
            }
            return res.status(500).json({
                success:false,
                message:'something went wrong',
                error:error,
                data:{}
            })
        }
    }


    module.exports = {
        getCartByUser,
        modifyProductTocart
    }
