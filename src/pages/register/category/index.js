import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleInput(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  useEffect(() => {
    const URL_API = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://primeflix-tc.herokuapp.com/categories';
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
        Cadastrar categoria: { values.title }
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);

        setValues(initialValues);
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
