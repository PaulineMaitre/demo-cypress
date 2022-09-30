import React from 'react';
import './App.css';
// import Example from "./components/Example";
import {Routes, Route} from "react-router-dom";
import {Dashboard} from "./components/Dashboard";
import {Header} from "./components/shared/Header";
import {ViewBook} from "./components/ViewBook";
import {EditBook} from "./components/EditBook";

function App() {
  return (
      <>
        <Header/>
        <Routes>
          {/*<Route path="/favorites" element={<Example/>}/>*/}
          <Route path="/" element={<Dashboard/>}/>
            <Route path="/books/:id/edit" element={<EditBook/>}/>
            <Route path="/books/:id/view" element={<ViewBook/>}/>
        </Routes>
      </>
  );
}

export default App;
