import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../assets/css/style.css'
import React from 'react';

import Iniciar from './Iniciar.js';
import Topo from "./Topo";


export default function App() {
    
    return (
      <BrowserRouter>
        <Topo />
        <Routes>
          <Route path="/" element={<Iniciar />}/>
        </Routes>
      </BrowserRouter>
    );
}