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
        <Route exact path="/" element={<Greet/>} />
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
    </>
  )
}
export default App
