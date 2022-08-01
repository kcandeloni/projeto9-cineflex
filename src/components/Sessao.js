import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function reservaAssento (id, requisicao) {
    let index = requisicao.ids.indexOf(id);
    if(index < 0){
        requisicao.ids.push(id)
    }
    else{
        requisicao.ids.splice(index,1)
    }
}

function RederAssento ({assento, requisicao}) {
    const [isSelected, setIsSelected] = useState(false); 
    let selecionado = '';
    if(!!isSelected){
        selecionado = 'assento-selecionado';
    }
    return(
         assento.isAvailable ? <div onClick={() => (setIsSelected(!isSelected), reservaAssento(assento.id, requisicao))} key={assento.id} className={`assento ${selecionado}`}>{assento.name}</div> : 
        <div onClick={() => alert('Esse assento não está disponível')} key={assento.id} className={`assento assento-indisponivel`}>{assento.name}</div>
    );
}

function Assentos ({seats, requisicao}){

    return(
        <div className='assentos'>
        {!!seats ? (seats.map((assento,index) => <RederAssento key={index} assento={assento} requisicao={requisicao}/> )) : <h2>Loading...</h2> }
        </div>
    );
}

export default function Sessao () {
    const {sessaoId} = useParams();

    const [sessao, setSessao] = useState({});

	useEffect(() => {
		const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/showtimes/'+sessaoId+'/seats');

		promise.then(resposta => {
			setSessao(resposta.data);
		});
	}, []);
    const requisicao = {
        ids: [],
        nome: '',
        cpf: 0,
    };
    return (
        <>
            <div className='mid'>
            {sessao ? <Assentos seats={sessao.seats} requisicao={requisicao}/> : <h2>Loading...</h2>}
            </div>
        </>
    );
    console.log(requisicao)
}