import React from 'react';
import DefaultPage from '../../../components/DefaultPage'
import { Link } from 'react-router-dom';

function RegisterCategory() {
    return (
        <DefaultPage>
            <h1>Register category</h1>
            <Link to="/">Home</Link>
        </DefaultPage>
    )
}

export default RegisterCategory;