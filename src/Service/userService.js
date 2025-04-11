class userService {
    constructor(_userRepository){
        // in this argument we will expect userRepository object 
        this.userRepository = _userRepository;
    }

    async registerUser(userDetails){
        console.log("hitting service layer")

        // it will create a brand new user in thd db

        // we need to check if the user with this email id and mobile number is already 
        // exist or not 

        const user  = await this.userRepository.findUser({
            email:userDetails.email,
            mobileNumber:userDetails.mobileNumber
        });


        if(user){
            // we found a user 
            throw{reason:"user with the given email and mobile number is already exist",statusCode:400}
    
        }

        // if not create user in the database 

        const newUser = await this.userRepository.createUser({
            email:userDetails.email,
            password:userDetails.password,
            firstName:userDetails.firstName,
            lastName:userDetails.lastName,
            mobileNumber:userDetails.mobileNumber
        });

        if(!newUser){
            throw{reason:'something went wrong, cannot create user', statusCode:500}
        }

        // return the details of the created user 

        return newUser;
    }
}


module.exports = userService;