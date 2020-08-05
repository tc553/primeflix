import React, { useState } from 'react';
import DefaultPage from '../../../components/DefaultPage'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function RegisterCategory() {
    const initialValues = {
        name: '',
        description: '',
        color: ''
    }

    let [categories, setCategories] = useState([]);
    let [values, setValues] = useState(initialValues);

    function handleInput(e) {
        setValue(e.target.getAttribute('name'), e.target.value);
    }

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        });
    }

    return (
        <DefaultPage>
            <h1>Cadastrar categoria: { values.name }</h1>
            <Link to="/">Home</Link>

            <form onSubmit={function handleSubmit(e) {
                e.preventDefault();
                setCategories([
                    ...categories,
                    values
                ]);

                setValues(initialValues);
            }}>
                <FormField 
                    label="Nome da categoria:"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleInput}
                />

                <FormField 
                    label="Descrição:"
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleInput}
                />
                
                <FormField 
                    label="Cor:"
                    type="color"
                    name="color"
                    value={values.color}
                    onChange={handleInput}
                />

                <button>Cadastrar</button>
            </form>

            <ul>
                { categories.map((category, index) => {
                    return <li key={index}>{ category.name }</li>
                }) }
            </ul>

        </DefaultPage>
    )
}

export default RegisterCategory;