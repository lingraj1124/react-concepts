import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'
import {vehicleOne,myVehicle1, myVehicle2} from  './constant'

export default function ArrayDestructure() {
  useEffect(()=>{
    myVehicle1(vehicleOne);
    myVehicle2(vehicleOne);
  },[])

  let car = ["red", "4", "4"]

  let [color, seat, wheel] = car;

  return (
    <div className="main-class">
     <h2>Home I am a {color} Car! with seats: {seat} and wheels: {wheel}</h2>
    </div>
  );
}

export const ArrayDestructureData = "this is home component"