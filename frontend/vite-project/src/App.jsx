//import './App.css'
import { Register } from './components/Register'
import {Login} from './components/Login'
import {Home} from "./components/Home"
import {Routes, Route, } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { QuestionComponent } from './components/QuestionComponent'
//import { Route } from 'react';

function App() {
 

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar/>
   <main className=" flex-1">
      <Routes>
        <Route path= "/register" element= {<Register/>}></Route>
       <Route path= "/login" element= {<Login/>}></Route>
       <Route path="/" element={<Home/>} ></Route>
       <Route path ="/questions" element ={<QuestionComponent/>}></Route>
      </Routes>
    </main>

      <Footer/>
    
    </div>
  )
}

export default App
