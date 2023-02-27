import React,  {useEffect,useState} from  'react'
import useArithmaticeOperation from './ArithmaticOperationHook'

export default  function Calculations(){

    const [data, addition, substaction,multiply,devide]= useArithmaticeOperation(20,10);

    return(
        <>
        <p>result : {data}</p>
        <button type='button' onClick={addition} className="main-class">Addition</button>
        <button type='button' onClick={substaction} className="main-class">Substaction</button>
        <button type='button' onClick={multiply} className="main-class">Multiplication</button>
        <button type='button' onClick={devide} className="main-class">Devide</button>
        </>
    )
}