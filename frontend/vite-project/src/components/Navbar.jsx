import React, { useEffect }  from "react";
//import Logo from "/assets/logo2.jpg";
import logo from "/assets/logo1.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    const handleScroll =()=>{
        if(isOpen){
          setIsOpen(false);
        }
      }
        window.addEventListener( "scroll", handleScroll )
       return()=>window.removeEventListener( "scroll",handleScroll )
    
  },[isOpen]);

  return (
        < nav className="sticky top-0 z-50  shadow">
    
        <div className =" h-[90px] bg-[#211d30] flex items-center justify-between  px-6 shadow z-50">
        
          <Link to="/">
          <img src={logo}   className = " bg-blend-color-50" alt="logo" width={250} height={20} />
          </Link>

         <ul className=" hidden md:flex list-none gap-10 p-2">
          <li className="hover:text-blue-400  text-white cursor-pointer">
            <Link to="/home"> HOME</Link>
          </li>
          <li className="  hover:text-blue-400 text-white rounded cursor-pointer">
            <Link to="/bollywood"> BOLLYWOOD</Link>
          </li>
          <li className=" hover:text-blue-400 rounded text-white  cursor-pointer">
            <Link to="/topRated">TOP RATED</Link>
          </li>
          <li className=" hover:text-blue-400 rounded text-white  cursor-pointer">
            <Link to="/hollywood">HOLLYWOOD</Link>
          </li>
        </ul> 

      

      <div className="flex justify-end m-4 width-200">

        <button className=" mr-3 px-4 py-2 border text-white border-black-500 rounded-lg  font-semibold hover:bg-blue-300">
          <Link to="/login">Login</Link>
        </button>

        <button className="border border-black-500  text-white rounded-lg px-4 py-2  font-semibold hover:bg-blue-300">
          <Link to="/register">Signup</Link>
        </button>
        
           <button
             className=" md:hidden  text-white px-4 py-2 text-4xl"
              onClick={()=> setIsOpen(!isOpen)}
              >
                 {isOpen ? "X" :"☰"}
           </button>

      </div>

      </div>
    
    {isOpen && (
           <div className =" bg-black bg-opacity-100 z-40 flex justify-center items-center text-white ">
        <ul className="md:hidden mt-4 flex flex-col gap-4">
          <li className="py-2" onClick={() => setIsOpen(false)}>
          <Link to="/home">Home</Link>
        </li>
        <li className="py-2" onClick={() => setIsOpen(false)}>
          <Link to="/bollywood">Bollywood</Link>
        </li>
        <li className="py-2" onClick={() => setIsOpen(false)}>
          <Link to="/topRated">Top Rated</Link>
        </li>
        <li className="py-2" onClick={() => setIsOpen(false)}>
          <Link to="/hollywood">Hollywood</Link>
        </li>
        <li className="py-2" onClick={() => setIsOpen(false)}>
          <Link to="/login">Login</Link>
        </li>
        </ul>
         </div>
      )}

      </nav>
  )

};

export default Navbar;
