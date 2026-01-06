import React, { useState } from "react";
import { AxiosInstance } from "../routes/axiosinstance";
import { Register } from "./Register";
import { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import toast from "react-hot-toast"

 export const Login = () => {

  const[loginUser,setLoginUser]=useState({
    email:"",
    password:""
  })
  const  navigate =useNavigate()

  const[RegisterUser,setRegisterUser]=useState([])

   const handleChange = async(e)=>{
    const{name,value}= e.target
    setLoginUser({...loginUser,[name]:value})

  }
  // async function getAllData(){
  //   let res = await AxiosInstance.get("/users")
  //   setRegisterUser(res.data);
  // } 

  const getAllData = async () => {
  try {
    const res = await AxiosInstance.get("/users");
    setRegisterUser(res.data);
  } catch (error) {
    console.error(error);
  }
};


  useEffect(()=>{
      getAllData();
 
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("form submit");

    let  AuthUser = RegisterUser.find(
      (ele)=> ele.email === loginUser.email  && ele.password===loginUser.password
    )

    if(AuthUser){
      navigate('/home')
      toast.success("user login successfully")

    }
    else{
      navigate("/")
      toast.error("invalid crendentails")
    }
  }
  return (
    <div className="flex justify-center mt-50">
      <form className="p-7 rounded border border-gray-300 shadow-lg"   onSubmit={handleSubmit} >
        <div className="flex flex-col">
          <label htmlFor="username" className="text-sb font-semibold mb-1">
            Email
          </label>
          <input type="text"
           name="email" 
           placeholder="Enter your email"
           value={loginUser.email}
           onChange={handleChange} >

           </input>
        </div>

        <div className="flex flex-col ">
          <label htmlFor="password" className="text-sb font-semibold mb-1">
            Password
          </label>
          <input
            type="text"
            name="password"
            placeholder="Enter Password"
            value={loginUser.password}
            onChange={handleChange}

          ></input>
        </div>


        <div className="flex flex-col border border-gray-30 mt-2">
          <button type="submit" className="">Login</button>
        </div>


         <p className="text-center text-gray-600 text-sm mt-2">
          Not a member?{" "}
          <Link
            to="/"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
};


