import React from 'react';
import DefaultPage from '../../../components/DefaultPage'
import { Link } from 'react-router-dom';

function RegisterVideo() {
    return (
        <DefaultPage>
            <h1>Cadastrar vídeo</h1>
            <Link to="/">Home</Link>
            <br />
            <Link to="/register/category">Nova categoria</Link>
        </DefaultPage>
    )
}

export default RegisterVideo;