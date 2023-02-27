import React,{useRef,useState} from  'react'

export  default function UserRefComp(){

    const element = useRef();
    const [data,setdata] = useState(0);

    const focusInput = () => {
        // console.log(data);
        // setdata(data+1);
        // console.log(data);
        console.log(element);
        element.current.focus();
        element.current.value = "abc"
      };

    return(
        <>
        <input type="text" ref={element} value={data} />
        <button type='button' onClick={()=>focusInput()}>Focus Input</button>
        </>
    )
}