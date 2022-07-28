import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function HoraSessao ({weekday, date, showtimes}) {

    return(
        <div className='horarios'>
            <p>{weekday} - {date}</p>
                <div>
                    {showtimes.map(hora => (
                        <Link to={`/sessao/${hora.id}`} >
                            <div key={hora.id} className='box-hora'><p>{hora.name}</p></div>
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
            <div className='box-bot'>
                <div className='box-title'><img src={posterURL} alt={title} /></div>
                <h3>{title}</h3>
            </div>
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