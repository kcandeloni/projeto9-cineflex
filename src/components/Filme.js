import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ExibeTitulo from './ExibeTitulo';

function HoraSessao ({weekday, date, showtimes}) {
    return(
        <div className='horarios'>
            <p>{weekday} - {date}</p>
                <div>
                    {showtimes.map(hora => (
                        <Link key={hora.id} to={`/sessao/${hora.id}`} >
                            <div className='box-hora'><p>{hora.name}</p></div>
                        </Link>)
                    )}
                </div>    
        </div>
    );
}


function Horarios ({title, posterURL, days}){
    return(
        <>
            <div className="subtitle">
                <h2>Selecione o Horário</h2>
            </div>
            <div className='mid'>
                <div>
                    {days ? days.map((horarios,index) => <HoraSessao key={index} {...horarios} />):<h3>Carregando</h3>}
                </div>
            </div>
            <ExibeTitulo 
                posterURL={posterURL} 
                title={title}/>
        </>
    );
}


export default function Filme () {

    const {filmeId} = useParams();

    const [movie, setMovie] = useState({});

	useEffect(() => {
		const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies/'+filmeId+'/showtimes');

		promise.then(resposta => {
			setMovie(resposta.data);
		});
	}, []);
    
    return (
        <>
            {movie ? <Horarios {...movie}/>  : <h2>Loading...</h2>}
        </>
    );
}