const express  = require("express");
const cookieParser = require('cookie-parser')


const serverConfig = require("./Config/serverConfig");
const ConnectDB = require("./Config/dbConfig");
// const User = require("./schema/userSchema");
const userRouter = require("./Routes/userRoutes");
const cartRouter = require("./Routes/CartRoute");
const authRouter = require("./Routes/authRoute");
const {isLoggedIn} = require('./Validation/authValidator')

const app = express();


app.use(cookieParser());
app.use(express.json()); //Yeh middleware request body ko JSON mein parse kar deta hai.
app.use(express.text()); //Yeh middleware plain text ko parse karta hai.
app.use(express.urlencoded({extended:true})); //HTML form ke data ko parse karta hai.



app.use('/users',userRouter); // connects cart router to the server
app.use('/carts',cartRouter);
app.use('/auth',authRouter);


app.get('/ping',isLoggedIn,(req,res)=>{
    console.log(req.body);
    console.log(req.cookies);
    return res.json({
        message:"pong"
    })
})


app.listen(serverConfig.PORT,async()=>{
    await ConnectDB();
    console.log(`server started at port ${serverConfig.PORT}...`)


    // const newUser = await User.create({
    //     email:'a@b.com',
    //     password:'123456',
    //     firstName:"sumit",
    //     lastName:"kumar",
    //     mobileNumber:"1234567890"
    // })
    // console.log("created new user");
    // console.log(newUser)
})






