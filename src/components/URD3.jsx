import { useState,useReducer } from "react";

const initialState=[];

function reducer(state,action){
    switch (action.type){
        case "ADD ITEM":
            return[...state,action.item];
            default :
            return state;
    }
}

function Items(){
const[list,dispatch]=useReducer(reducer,initialState)
const[item,setitem]=useState("")

 const addItem =()=>{
    if (item.trim()!==""){
        dispatch ({type:"ADD ITEM",item:item})
        setitem("")
    }
 }
 return(
    <div>
        <input 
        type="text"
        placeholder="enter item "
        value={item}
        onChange={(e)=>setitem(e.target.value)}
         />

        <button onClick={addItem}>Add Item</button>

        <ul>
            {list.map((value,index)=>(
                <li key={index}>{value}</li>
            ))}
        </ul>
    </div>
 )

}
export default Items; 