import { useState,useMemo } from "react";

function Squre(){
    const[count,setCount]=useState(0);
    const[number,setNumber]=useState(5);

    const squared=useMemo(()=>{
        return number*number
     },[number])
     return(
        <>
        <p>
            {number}--{squared}
        </p>
        <button onClick={()=>setNumber((n)=>n+1)}>+</button>
        <button onClick={()=>setNumber((n)=>n-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>{count}</button>
        </>
     )
}
export default Squre