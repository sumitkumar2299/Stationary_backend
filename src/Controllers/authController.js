const {loginUser} = require("../Service/authService")


async function login(req,res){
    try{
        
        const loginPayload = req.body;
        const response = await loginUser(loginPayload);
        console.log("loging in authcontroller.js")

        return res.status(200).json({
            success:true,
            message:"logged in succesfully",
            data:response,
            error:{}
        })
    }catch(error){
        return res.status(error.statusCode).json({
            success:false,
            data:{},
            message:error.message,
            error:error
        })
    }

}

module.exports = {
    login
}