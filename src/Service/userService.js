const {findUser,createUser} = require('../Repository/userRepository');
const {createcart} = require('../Repository/CartRepository')

async function registerUser(userDetails){
    console.log("hitting service layer")
    // it will create a brand new user in the db

    const user = await findUser({
        email:userDetails.email,
        mobileNumber:userDetails.mobileNumber
    })

    if(user){
        // we found a user
        throw{reason:'user with the given email and mobile number already exist',statusCode:400}
    }
    
    // if not then create the user in the database 

    const newUser = await createUser({
        email:userDetails.email,
        password:userDetails.password,
        firstName:userDetails.firstName,
        lastName:userDetails.lastName,
        mobileNumber:userDetails.mobileNumber
    })

    if(!newUser){
        throw{reason:'something went wrong,cannot create user',statusCode:500}
    }


    await createcart(newUser.id)



    return newUser
}


module.exports = {
    registerUser
}