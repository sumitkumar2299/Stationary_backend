
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import SignupPresentation from "./SignUpPresentation";

// container for the signup page 
 function Signup() {
    const[signUpState, setSignUpState] = useState({
        firstName:'',
        email:'',
        mobileNumber:'',
        password:''
    })

    function HandleUserInput(e){
        const{name,value} =  e.target;
        setSignUpState({
            ...signUpState,
            [name]:value
            })
    }

    function HandleFormSubmit(e){
        e.preventDefault(); // prevent the form from reloading the page 
        console.log(signUpState);


        // Add validation to the form input 

        if(!signUpState.email || !signUpState.mobileNumber || !signUpState.password || !signUpState.firstName){
            toast.error('missing value from the form');
        }
        if(signUpState.firstName.length<5 || signUpState.firstName.length>20){
            toast.error('First name must be greater than 5 character and less than 20 character long ')
        }
        if(!signUpState.email.includes('@') || !signUpState.email.includes('.')){
            toast.error("email is not valid");
        }

        // check mobile number length between 10 to 12 

        if(signUpState.mobileNumber<10 || signUpState.mobileNumber>12){
            toast.error("invalid mobile number");
        }

        
        return;
        

    }

  return(
    <SignupPresentation HandleFormSubmit={HandleFormSubmit} HandleUserInput={HandleUserInput}/>
  )
 }
 
 export default Signup;
