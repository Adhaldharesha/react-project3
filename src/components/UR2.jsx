import { useState, useReducer, useRef } from "react";

const initialState={result:0};

function reducer(state,action){
    switch (action.type){
          case "ADD":
            return{result:Number (action.a) + Number(action.b)};

          case "SUBTRACT":
            return{result:Number (action.a)- Number(action.b)} 
            
         case "MULTIPLY":
           return{result:Number (action.a) * Number(action.b)}   
    
         case "DIVIDE":
            return{result :Number(action.b)===0?"cannot  divided by zero"
                 :Number(action.a)/ Number(action.b)} ; 

         case "RESET":
            return    initialState    
   default:
    return state;
}
}

function Cal(){
     const[state,dispatch]=useReducer(reducer,initialState)

     const[a,setA]=useState("");
     const[b,setB]=useState("");


     const pervResult=useRef(0);

     const calculate=(type)=>{
        pervResult.current=state.result;
        dispatch ({type,a,b});
     }
     return(
        <div>
            <h2>simple Calculator</h2>

            <input type="number"
            placeholder="first number"
            value={a}
            onChange={(e)=>setA(e.target.value)} />

            <input type="number"
            placeholder="Second number"
            value={b}
            onChange={(e)=>setB(e.target.value)} />
            <br /><br />
            <button onClick={()=>calculate( "ADD")}>+</button>
            <button onClick={()=>calculate( "SUBTRACT")}>-</button>
            <button onClick={()=>calculate( "MULTIPLY")}>*</button>
            <button onClick={()=>calculate( "DIVIDE")}>/</button>
            <button onClick={()=>calculate( "RESET")}>0</button>
            <h3>Result:{state.result}</h3>
            <h3>pervResult;{pervResult.current}</h3>

        </div>
     )
}
export default Cal