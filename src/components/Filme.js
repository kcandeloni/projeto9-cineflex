import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Horarios ({movie}){
    
    return(
    <h2>Teste:{movie.title}</h2>
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
            {movie ? <Horarios movie={movie}/>  : <h2>Loading...</h2>}
        </>
    );
}