import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Box ({movie}){

    return(
        <Link to={`/filme/${movie.id}`} ><div key={movie.id}className="box-title">
            <img src={movie.posterURL} alt={movie.title}/>        
        </div></Link>
    );
}

export default function List () {

    const [movies, setMovies] = useState([]);

	useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		promise.then(resposta => {
			setMovies(resposta.data);
		});
	}, []);
    return (
        <>
            {movies ? (
            <div className="titles">
                {movies.map((movie,index) => <Box movie={movie}/>)}
            </div>) :<h2>Loading...</h2>}
        </>
    );
}