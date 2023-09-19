import React from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../../Firebase";

const auth=getAuth(app);

const Signup = () => {

    const [name , setName]=useState("");
    const [number , setNumber]=useState("");
    const [email , setEmail]=useState("");
    const [password , setPassword]=useState("");
    const [company , setCompany]=useState("");

console.log(number)

    const  navigate  = useNavigate();
    function handleClick(){
        navigate("/login")
    }
    // notify when user click on create account button
    // toast.configure();
    function notify(){
         if(!name || !number || !email || !password || !company ){
            toast.error('Fill All The Inputs', {
                position: toast.POSITION.TOP_RIGHT,
            });
            
         }
         //Validation
         if (password.length < 6) {
            toast.error('Password must be at least 6 characters long.');
            return;
          }
          if (!email.includes('@')) {
            toast.error('Invalid email format. Please include "@" in your email.');
            return;
          }
         else{
            toast.success('Account Successfully Created !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then((value)=> console.log("successfully signup"))
    }
  return (
    <div className='signup'>
      <h1>Create your <br /> PopX account</h1>
      <form>
        <div className='flex'>
            <label htmlFor="name">Full Name<span className='asterisk'>*</span> </label>
            <input type="text" placeholder='Marry Doe' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='flex'>
            <label htmlFor="number">Phone number<span className='asterisk'>*</span></label>
            <input type="text " placeholder='Marry Doe' value={number} onChange={(e)=>setNumber(e.target.value)}/>
        </div>
        <div className="flex">
            <label htmlFor="Email address">Email address<span className='asterisk'>*</span></label>
            <input type="text" placeholder='Marry Doe' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="flex">
            <label htmlFor="Password">Password<span className='asterisk'>*</span></label>
            <input type="text" placeholder='Marry Doe' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className="flex">
            <label htmlFor="Company name">Company name</label>
            <input type="text" placeholder='Marry Doe' value={company} onChange={(e)=>setCompany(e.target.value)}/>
        </div>
        <h3>Are you an Agency?<span className='asterisk'>*</span></h3>
        
        <div className="radio" style={{marginLeft:"-190px"}}>
        <input type="radio" checked /> <span style={{marginLeft:"-140px"}} className='yes'>Yes</span>
        <input type="radio" /> <span style={{marginLeft:"-140px"}} className='no'>No</span>
        </div>
      </form>
      <button onClick={notify}>Create Account</button>
      <ToastContainer/>
      <h3 className='login' onClick={handleClick}>Login Here</h3>
    </div>
    
  )
}

export default Signup
