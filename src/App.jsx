import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/test2" element={<Greet/>} />
      </Routes>
    </Router>
      
    </>
  )
}

const Greet = () =>{
  return(
    <>
      hey there man!
      its working
      how is it working!!!!!!!!!!!
    </>
  )
}
export default App
