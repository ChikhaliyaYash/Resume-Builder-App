import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Login from "./components/login/Login"
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Header/>}/>
        <Route exact path="/home2" element={<Body/>}/>
        
      </Routes>
      </BrowserRouter> */}
      <Header /> 
      <Body />
    </div>
  );
}

export default App;
