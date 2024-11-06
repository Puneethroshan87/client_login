// import React, { useState } from 'react';

import { useState } from "react";

import axios from  'axios';



const Signup =()=>{
    const [username, setUsername] = useState("");

    const  [email, setEmail] = useState("");

    const [password,setPassword]= useState("");

    

    const SubmitHandler =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/signup',{username,email,password})
        .then((User)=>{console.log(User)})
        .catch((err)=>{console.log(err)})
    }

   

    return(
        <div>
     <form  onSubmit ={SubmitHandler}>
     <input type="text"  placeholder="Enter- name" onChange={(e)=>{setUsername(e.target.value)}}/>
     <input type="email" name="" id="" onChange={(e)=>{setEmail(e.target.value)}} />
     <input type="password" name="" id="" onChange={(e)=>{setPassword(e.target.value)}}/>
     <input type="submit" value="submit" />
     </form>


        </div>
    )
}
export default  Signup;
