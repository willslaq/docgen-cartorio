import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import NavBar from '../../components/Navbar/index';

export default function DocumentosPessoa({ match }) {
    const [pessoa, setPessoa] = useState();

    useEffect(() => {
        async function search() {
            const response = await api.post("pessoa", { _id: match.params._id });

            setPessoa(response.data);

            console.log('response:', response.data)
            // setPessoa(pessoa)

            console.log('pessoa unica' , pessoa)
        }

        search()
    }, [])

    return (
        <div>{console.log('pessoa renderizada', pessoa)}</div>
    )
}