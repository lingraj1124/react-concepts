import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'

export default function Events() {
  useEffect(()=>{
      console.log("on component load show  output")
  },[])

  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div className="main-class">
        <input name="firstName" onChange={handleChange} />
        <button type='button' onClick={()=> console.log("clicked")} className="main-class">Click here</button>
        <button type='button' onMouseEnter={()=> console.log("mouse hoved on button")} onMouseLeave={()=> console.log("mouse hoved out button")}className="main-class">Mouse  hover here</button>
        <input name="firstName" onKeyDown={handleChange} />
    </div>
  );
}