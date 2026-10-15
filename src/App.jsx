import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import AddNumbers from "./components/US1"
import MatchText from "./components/US2"
import Details from "./components/US3"
import List from "./components/US4"
import Store from "./components/US5"
import Stopwatch from "./components/US6"
import Information from "./components/UE1"
import Timer from "./components/UE2"
import Theam from "./components/UC2"
import App from "./components/UR1"
import URF from "./components/URF1.jsx"
import Cal from "./components/UR2.jsx"
import Items from "./components/URD3.jsx"
function APP(){
  return(
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<AddNumbers/>}/>
      <Route path="/us" element={<MatchText/>}/>
      <Route path="/usd" element={<Details/>}/>
      <Route path="/ul" element={<List/>}/>      
      <Route path="/ut" element={<Store/>}/>
      <Route path="/st" element={<Stopwatch/>}/>
      <Route path="/tt" element={<ToggleEvent/>}/>
      <Route path="/ud" element={<Information/>}/>
      <Route path="/tr" element={<Timer/>}/>
      <Route path="/tm" element={<Theam/>}/>
      <Route path="/i"  element={<App/>}/>
      <Route path="/f" element={<URF/>}/>
      <Route path="/c"  element={<Cal/>}/>
      <Route path="/li" element={<Items/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default APP