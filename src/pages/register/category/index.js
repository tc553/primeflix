import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import URL_BACKEND from '../../../config';

function RegisterCategory() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const { values, handleInput, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL_API = `${URL_BACKEND}/categories`;
    fetch(URL_API)
      .then(async (response) => {
        const responseJson = await response.json();
        setCategories([
          ...responseJson,
        ]);
      });
  }, [
  ]);

  return (
    <DefaultPage>
      <h1>
        Cadastrar categoria:
        {' '}
        { values.title }
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);

        clearForm();
      }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          name="title"
          value={values.title}
          onChange={handleInput}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleInput}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleInput}
        />

        <Button>Cadastrar</Button>
      </form>

      {
        categories.length === 0 && (
          <div>
            Loading...
          </div>
        )
      }

      <ul>
        { categories.map((category, index) => (<li key={`${category}${index}`}>{ category.title }</li>)) }
      </ul>

    </DefaultPage>
  );
}

export default RegisterCategory;
