import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Box ({movie, setId}){

    return(
        <Link to='/filme/' onClick={() => setId(movie.id)}><div key={movie.id}className="box-title">
            <img src={movie.posterURL} alt={movie.title}/>        
        </div></Link>
    );
}

export default function List ({setId}) {

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
                {movies.map((movie,index) => <Box setId={setId} movie={movie}/>)}
            </div>) :<h2>Loading...</h2>}
        </>
    );
}