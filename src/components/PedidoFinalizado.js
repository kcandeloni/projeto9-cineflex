import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


function Mensagem ({status}) {
    if(status === 200){
        return(
            <div className='mensagemPost ok'><div><h2>Pedido feito com sucesso!</h2></div></div>
        );
    }
    return(
        <div className='mensagemPost falha'><div><h2>Falha no pedido!!</h2></div></div>
    );
}

function InfoFilme ({title, name, date}) {
    return(
        <div>
        <h2>Filme e Sessão</h2>
            <p>{title}</p>
            <p>{date} {name}</p>
        </div>
    );
}

function Ingresso ({ids}) {
    ids = ids.map(id => {while(id > 50){ id -= 50} return id})
    return(
        <div>
        <h2>Ingresso(s)</h2>
        {ids.map((assento,index) => <p key={index}>Assento {assento}</p>)}
        </div>
    );
}

function Comprador ({nome,cpf}) {
    let newCPF = '';
    for(let i = 0; i < cpf.length; i++){
        if(i % 3 === 0){
            if(i === 9){
                newCPF += '-';
            }else{
                newCPF +='.';
            }
        }
        newCPF += cpf[i];
    }
    return(
        <div>
        <h2>Comprador</h2>
        <p>Nome: {nome}</p>
        <p>CPF: {newCPF}</p>
        </div>
    );
}

export default function PedidoFinalizado({requisicao, info}) {

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
    <div className='sucesso'>
      { !!validaPost.status ? <>
        <Mensagem status={validaPost.status}/>
        <div className='info'>
            <InfoFilme {...info}/>
            <Ingresso ids={requisicao.ids}/>
            <Comprador nome={requisicao.name} cpf={requisicao.cpf}/>
        </div>
        </>
    : <h2>Loading...</h2>
    }

      <Link to={`/`}>
          <button onClick={() => {
            requisicao.name='';
            requisicao.cpf='';
            requisicao.ids=[];
            info.title ='';
            info.date ='';
            info.name ='';
      }} className="button-envia">Reservar Assento(s)</button>
          </Link>
    </div>
  );
}