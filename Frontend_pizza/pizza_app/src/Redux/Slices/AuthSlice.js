
import {createSlice} from "@reduxjs/toolkit"
 
const initialState = {
    isLoggedIn:localStorage.getItem('isLoggedIn') === 'true' || 'false',
    role:localStorage.getItem('role') || '',
    data: JSON.parse(localStorage.getItem('data')) || {}  
    // pahle yeh string ke form data aayega lekin humein chahiye object ke form toh json.
    // parse ka use karte hai 
}


const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{}

});

export default AuthSlice.reducer;