import React, { useState } from 'react';
import DefaultPage from '../../../components/DefaultPage'
import { Link } from 'react-router-dom';

function RegisterCategory() {
    const initialValues = {
        name: '',
        description: '',
        color: ''
    }

    let [categories, setCategories] = useState([]);
    let [values, setValues] = useState(initialValues);

    function handleInput(e) {
        const { getAttribute, value } = e.target;
        setValue(getAttribute('name'), value);
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
                <div>
                    <label>
                        Nome da categoria:
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleInput}
                        />
                    </label>
                </div>

                <div>    
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            name="description"
                            value={values.description}
                            onChange={handleInput}
                        />
                    </label>
                </div>
                    
                <div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            name="color"
                            value={values.color}
                            onChange={handleInput}
                        />
                    </label>
                </div>

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