import React, {useState,useEffect} from 'react'

export default function Operators(){

    const [data1, setData1] = useState(true)
    const [checkValue, setCheckvalue] = useState('')

    // useEffect(()=>{
    //     TernaryOperatorExample();
    // },[])

   const TernaryOperatorExample=()=>{
        let checkValue =  data1 == true ? "returns true data" : "return false data";  // Ternary operator

        // normal way
        // let checkValue1 = true;
        // if(data1 == true){
        //     checkValue1 = "returns true data";
        // }
        // else{
        //     checkValue1 = "returns false data";
        // }
        // console.log(checkValue1);

        console.log(checkValue);
        setCheckvalue(checkValue)
    }
    
   const SpreadOperatorExample=()=>{
        const numbersOne = [1, 2, 3];
        const numbersTwo = [4, 5, 6];
        const numbersCombined1 = [...numbersOne, ...numbersTwo];

         // normal way
        // const numbersCombined = [];
        // numbersCombined.push(numbersOne[0]);
        // numbersCombined.push(numbersOne[1]);
        // numbersCombined.push(numbersOne[2]);
        // numbersCombined.push(numbersTwo[0]);
        // numbersCombined.push(numbersTwo[1]);
        // numbersCombined.push(numbersTwo[2]);

        // numbersCombined.push(...numbersOne)
        // numbersCombined.push(...numbersTwo)

        // console.log(numbersCombined);

        console.log(numbersCombined1);
    }

    const RestOperatorExample=()=>{
        const numbers = [1, 2, 3, 4, 5, 6];

        const [one, two, ...rest] = numbers; // numbers = [1, 2, 3, 4, 5, 6]

        console.log(one);
        console.log(two);
        console.log(rest);

        RestOperatorExample2(one, "one", "two", "three", "four");
        RestOperatorExample3(one, "one", "two", "three", "four");


    }

    const RestOperatorExample2=(data, data1, data2, data3, data4)=>{
        console.log(data)
        console.log(data1)
        console.log(data2)
        console.log(data3)
        console.log(data4)
    }   

    const RestOperatorExample3=(data, ...data1)=>{
            console.log(data)
            console.log(data1)
    }

    return(
        <div className="main-class pagebtn">
            <button type='button' onClick={()=>TernaryOperatorExample()} className='btn'>Operators examples on Ternary operator check console output = {checkValue.length > 0 ? checkValue : "no data"}</button>

            <button type='button' onClick={()=>SpreadOperatorExample()} className='btn'>Operators examples on Spread operator check console</button>
            
            <button type='button' onClick={()=>RestOperatorExample()} className='btn'>Operators examples on Rest operator check console</button>
        </div>  

    )
}