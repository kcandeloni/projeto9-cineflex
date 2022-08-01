import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Formulario({requisicao}) {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  function validaDados (){
    if (cpf.length !== 11 || name.length < 2 || requisicao.ids.length < 1) {
      return false;
    }
    return true;
  }

  function enviaForm(e) {
    e.preventDefault();
    if (cpf.length !== 11 || name.length < 2 || requisicao.ids.length < 1) {
      alert('Dados inválidos!\nSelecione 1 ou mais assentos\nNome deve conter ao menos 3 caracteres\nCPF deve conter 11 numeros');
    }
    else{
      setName('');
      setCpf('');
    }
  }

  return (
    <div className="form-box">
      <form onSubmit={enviaForm}>
        <div className='conteudo-formulario'>
          <div className="input-box">
            <div className="title-form">Nome do Comprador</div>
            <input
              type="text"
              placeholder="Digite seu nome..."
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className="input-box">
            <div className="title-form">CPF do Comprador</div>
            <input
              type="Number"
              placeholder="Digite seu CPF..."
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
              required
            />
          </div>
          {validaDados() ? <Link to={`/sucesso`}>
          <button onClick={() => {requisicao.name= name;
      requisicao.cpf=cpf;}} className="button-envia">Reservar Assento(s)</button>
          </Link>
          : <button onClick={() => {requisicao.name= name;
      requisicao.cpf=cpf;}} className="button-envia">Reservar Assento(s)</button> }
        </div>
      </form>
    </div>
  );
}
