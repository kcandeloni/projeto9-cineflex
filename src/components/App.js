import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import '../assets/css/style.css'
import React from 'react';


import Iniciar from './Iniciar.js';
import Filme from './Filme';
import Topo from './Topo';



export default function App() {
    
  const [id, setId] = useState("1");
    return (
      <BrowserRouter>
        <Topo />
        <Routes>
          <Route path='/' element={<Iniciar setId={setId}/>}/>
          <Route path='/filme/' element={<Filme id={id}/>}/>
        </Routes>
      </BrowserRouter>
    );
}