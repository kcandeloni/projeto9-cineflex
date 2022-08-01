import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ExibeTitulo from './ExibeTitulo';
import Formulario from './Formulario';

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
assento.isAvailable ? <div onClick={() => {setIsSelected(!isSelected); reservaAssento(assento.id, requisicao)}} key={assento.id} className={`assento ${selecionado}`}>{assento.name}</div> : 
        <div onClick={() => alert('Esse assento não está disponível')} key={assento.id} className={`assento assento-indisponivel`}>{assento.name}</div>
    );
}

export default function Sessao ({requisicao}) {
    const {sessaoId} = useParams();

    const [sessao, setSessao] = useState({});

	useEffect(() => {
		const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/showtimes/'+sessaoId+'/seats');

		promise.then(resposta => {
			setSessao(resposta.data);
		});
	}, []);

    return (
        <>
            <div className='mid'>
                <div className='assentos'>
                    {!!sessao.seats ? sessao.seats.map((assento,index) => <RederAssento key={index} assento={assento} requisicao={requisicao}/>) : <h2>Loading...mid</h2>}
                </div>
                <div className='exemplo-disponibilidade'>
                    <div><div className={`assento assento-selecionado`}></div><p>Selecionado</p></div>
                    <div><div className={`assento`}></div><p>Disponível</p></div>
                    <div><div className={`assento assento-indisponivel`}></div><p>Indisponível</p></div>
                </div>
            <Formulario requisicao={requisicao}/>
            </div>
            {!!sessao.movie ? <ExibeTitulo 
                posterURL={sessao.movie.posterURL} 
                title={sessao.movie.title}
                date={sessao.day.date}
                name={sessao.name}/> : <h2>Loading...bot</h2>}
        </>
    );
}