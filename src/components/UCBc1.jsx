import { memo } from "react";

const Child=memo(function Child({onclick}){
    console.log("Child rendered")

    return<button onclick={onclick}>Click Child</button>
})
export default Child