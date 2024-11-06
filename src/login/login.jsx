// import React, { useState } from 'react';

import { useState } from "react";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Login data:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;




const Login =()=>{
   

    const  [email, setEmail] = useState("");

    const [password,setPassword]= useState("");
    const SubmitHandler =(e)=>{
        e.preventDefault();
        console.log(email,password);

    }

    return(
        <div>
     <form action="" onSubmit={SubmitHandler}>
     {/* <input type="text"  placeholder="Enter- name" onChange={(e)=>{setUsername(e.target.value)}}/> */}
     <input type="email" name="" id="" onChange={(e)=>{setEmail(e.target.value)}} />
     <input type="password" name="" id="" onChange={(e)=>{setPassword(e.target.value)}}/>
     <input type="submit" value="submit" />
     </form>

        </div>
    )
}
export default  Login;