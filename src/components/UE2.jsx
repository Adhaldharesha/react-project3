import { useState,useEffect } from "react";
function Timer(){
const[time,setTime]=useState(0)
useEffect(()=>{ 
    const interval=setInterval(()=>{
        setTime((prevTime)=>prevTime+10)
    },1000)
    return()=>clearInterval(interval)
},[])
 return(
    <div>
        <h1>Timer:{time}</h1>
    </div>
 )
}
export default Timer