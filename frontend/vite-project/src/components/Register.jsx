import React, { useState } from 'react'
//import axios from "axios"
import { AxiosInstance } from '../routes/axiosinstance';
//import { AxiosInstance } from './../routes/axiosinstance';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const Register = () => {

    const [form, SetForm]=useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const navigate=useNavigate();
const handleChange=(e)=>{
    let{name,value}=e.target;
     console.log({[name]:value});

    SetForm({...form, [name]:value })
}




const handleSubmit= async(e)=>{
      e.preventDefault();

      try {
        let res = await AxiosInstance.post("/users",{
          username:form.username,
          email:form.email,
          password:form.password,
          confirmPassword:form.confirmPassword
        })
        console.log("user Register succesfully",res.data);
        navigate('/login')
        toast.success("login register successfully")
      }
          
      catch(error){
             console.log("error occured",error)

      }
      
 

    console.log("form submitted");

}

  return (
    <div className='  flex  justify-center mt-50'>
      {/* <h2 class>Register</h2>  */}


       <form className=' border border-gray-300 p-5 mb-10 rounded shadow-lg w-70'  onSubmit={handleSubmit}>
        <div className='flex flex-col '>
             <label htmlFor='username ' className='mb-1 font-semibold text-sb'>UserName</label>
              <input  className="border border-gray-300" type="text"  name="username" placeholder='Enter your name' value={form.username} onChange={handleChange}></input>
        </div>
        <div className='flex flex-col'>
             <label htmlFor='email ' className='mb-1 font-semibold text-sb'>Email</label>
              <input  className ="border border-gray-300"  type="email"  name="email" placeholder='Enter Email' value={form.email} onChange={handleChange}></input>
        </div>
        <div className='flex flex-col'>
             <label htmlFor='password ' className='mb-1 font-semibold text-sb'>Password</label>
              <input  className='border border-gray-300' type="text"  name="password" placeholder='Enter your password' value={form.password} onChange={handleChange}></input>
        </div>
        <div className='flex flex-col'>
             <label htmlFor='confirmPassword' className='mb-1 font-semibold text-sb'>Confirm Password</label>
              <input className='border border-gray-300' type="text"  name="confirmPassword" placeholder='Enter confirm password' value={form.confirmPassword} onChange={handleChange}></input>
        </div>
        <div className='flex flex-col m-4 hover:bg-blue-200 p-2 rounded'>
             <button className='' type="submit">Submit</button>
        </div>
       </form>
            


    </div>
  )
}
