import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function PedidoFinalizado({requisicao}) {

    const [validaPost, setValidaPost] = useState({});

	useEffect(() => {
		const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', requisicao);

		promise.then(resposta => {
			setValidaPost(resposta);
		});
	}, []);
    console.log(validaPost)
    console.log(requisicao)
  return (
    <div>
      

      <Link to={`/`}>
          <button onClick={() => {requisicao.name= '';
      requisicao.cpf='';requisicao.ids=[]}} className="button-envia">Reservar Assento(s)</button>
          </Link>
    </div>
  );
}