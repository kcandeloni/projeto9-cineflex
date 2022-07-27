import { useState, useEffect } from 'react';
import axios from 'axios';

function Horarios ({movie}){
    
    return(
    <h2>{movie.title}</h2>
    );
}


export default function Filme ({id}) {

    const [movie, setMovie] = useState({});

	useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/"+id+"/showtimes");

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