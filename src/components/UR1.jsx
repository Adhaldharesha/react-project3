import { useReducer } from "react";
const initialState={count:0};

function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
            return{count:state.count+1};
        
        case "DECREMENT":
            return{count:state.count-1};
            
        case "RESET":
            return initialState
            
        default:
        return state    
    }
}
function App(){
    const[state,dispatch]=
    useReducer(reducer,initialState)

    return(
        <div>
            <h2>Count:{state.count}</h2>
              {state.count <=10 &&  (
            <button onClick={()=> dispatch({type:"INCREMENT"})}>increase</button>)}
              {state.count >0 && (
            <button onClick={()=> dispatch({type:"DECREMENT"})}>decrease</button>)}
            <button onClick={()=> dispatch({type:"RESET"})}>reset</button>

        </div>
    )
}
export default App