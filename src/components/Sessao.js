import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Assentos ({seats}){

    return(
        <div key={seats.id}>{seats.id}</div>
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

    return (
        <>
            <h2>Loading...</h2>
        </>
    );
}