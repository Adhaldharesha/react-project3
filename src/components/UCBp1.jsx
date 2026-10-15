import { useState,useCallback } from "react";
import Child from "./UCBc1";

function Counter(){
  const[count,setCount]=useState(0);

  const handleClick=useCallback(()=>{
    console.log("Child button clicked")
  },[])

  return(
    <div>
        <h2>Count:{count}</h2>

        <button onClick={()=>setCount(count+1)}>Increase Count</button>

        <Child onClick={handleClick}/>
    </div>
  )
}
export default Counter