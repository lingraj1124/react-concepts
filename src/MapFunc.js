import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import {vehicleOne,myVehicle1, myVehicle2} from  './constant'
import { Routes,Route, useNavigate } from "react-router-dom";

function MapFunc() {

    const [carProps, setCarProps] = useState([
    {
        prop: 'color',
        value:  'red'
    },
    {
      prop: 'seat',
      value:  '4'
    },
    {
      prop: 'wheel',
      value:  '4'
    },
  ]);

    const navigate = useNavigate();
  useEffect(()=>{
    console.log(vehicleOne);
    myVehicle1(vehicleOne);
    myVehicle2(vehicleOne);
  },[])

  let car = ["red", "4", "4"]

  let [color, seat, wheel] = car;


  return (
    <div className="main-class">
    {
       carProps.map((data, i)=>{
         return <p key={i} >{data.prop} : {data.value}</p>
       })
    }
   </div>
  );
}

export default MapFunc;