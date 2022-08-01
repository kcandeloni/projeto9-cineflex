import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../assets/css/reset.css'
import '../assets/css/style.css'
import React from 'react';


import Iniciar from './Iniciar.js';
import Filme from './Filme';
import Topo from './Topo';
import Sessao from './Sessao';
import PedidoFinalizado from "./PedidoFinalizado";

export default function App() {

  const requisicao = {
    ids: [],
    name: '',
    cpf: '',
  };

    return (
      <BrowserRouter>
        <Topo />
        <Routes>
          <Route path='/' element={<Iniciar />}/>
          <Route path='/filme/:filmeId' element={<Filme />}/>
          <Route path='/sessao/:sessaoId' element={<Sessao requisicao={requisicao}/>}/>
          <Route path='/sucesso' element={<PedidoFinalizado requisicao={requisicao} />}/>
        </Routes>
      </BrowserRouter>
    );
}