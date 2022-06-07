import React from 'react';
import './App.css';
// import Example from "./components/Example";
import {Routes, Route} from "react-router-dom";
import {Dashboard} from "./components/Dashboard";
import {Header} from "./components/shared/Header";

function App() {
  return (
      <>
        <Header/>
        <Routes>
          {/*<Route path="/favorites" element={<Example/>}/>*/}
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </>
  );
}

export default App;
