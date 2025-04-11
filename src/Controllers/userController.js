const UserRepository = require('../Repository/userRepository');
const UserService = require('../Service/userService')

async function createUser(req,res){
    console.log("create user controller called");
    console.log(req.body)

    const userService = new UserService(new UserRepository());
    console.log(userService);

    try{
        console.log("hey it's working or not")
        const response = await userService.registerUser(req.body);
        console.log("hey it's working or not")
        return res.json({
            message:"successfully registered the user",
            success:true,
            data:response,
            error:{}
        });
    }catch(error){
        return res.status(error.statusCode).json({
            success:false,
            message:error.reason,
            data:{},
            error:error
        })
    }
}

module.exports = {
    createUser
}