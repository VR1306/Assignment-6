import React, { useState } from "react";
import'./Regfunc.css'
function Regfunc(){
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[name,setName]=useState('')
    const[cit,setCit]=useState('')
    const[ph,setPh]=useState('')
    const[ema,setEma]=useState('')
    const[onsubmit,setOnsubmit]=useState(false)
   
    
  const handleChange=()=>{
           setOnsubmit(true)
           setOnsubmit(!onsubmit)
        }
   const handlefname=(e)=>{
          setFname(e.target.value)
        }
   const handleLname=(e)=>{
          setLname(e.target.value)
        }
   const handleName=(e)=>{
          setName(e.target.value)
        }
    const handleCity=(e)=>{
          setCit(e.target.value)
        }
    
    const handlePhone=(e)=>{
          setPh(e.target.value)
        }
    
    const handleEmail=(e)=>{
          setEma(e.target.value)
        }
    return(
        <div className='row'>
        <div className='col-8'>
  <div className='a'>
         <h1><center>Register New Account</center></h1>
         
            
            
          <div className='b'>
          <div><input type='text' placeholder='Firstname'  onChange={handlefname}></input></div>
          <div ><input type='text' placeholder='Lastname' onChange={handleLname}></input></div>
          </div> 
          <br>
          </br>
  
  
        <div className='c'>
        <input type='text' placeholder='Name' onChange={handleName}></input></div><br></br>
  
        <div className='d'>
        <input type='text' placeholder='City' onChange={handleCity}></input>
        </div>
        <br></br>
  
        <div className='e'>
        <input type='text' placeholder='PhoneNumber'  onChange={handlePhone}></input>
        </div><br></br>
  
        <div className='f'>
        <input type='text' placeholder='Email'onChange={handleEmail}></input><br></br>
        </div><br/>
  
        <div>
        <button className='h' onClick={handleChange}>Create Account</button>
        </div>
  </div>
  </div>
        
        <div className='col-4'>
        <div className='r'>
                {onsubmit&&<div>
            <label>First Name:{fname}</label><br></br>
            <br></br>
            <label>Last Name: {lname}</label><br></br>
            <br></br>
            <label>Name:{name}</label><br></br>
            <br></br>
            <label>City:{cit}</label><br></br>
            <br></br>
            <label>PhoneNumber{ph}</label><br></br>
            <br></br>
            <label>Email{ema}</label><br></br>
            </div>
            
            }
            </div>
        </div>
        </div>
    )
}
export default Regfunc