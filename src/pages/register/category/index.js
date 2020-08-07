import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  const initialValues = {
    name: '',
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

  return (
    <DefaultPage>
      <h1>
        Cadastrar categoria:
        { values.name }
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
          name="name"
          value={values.name}
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

      <ul>
        { categories.map((category, index) => (<li key={`${category}${index}`}>{ category.name }</li>)) }
      </ul>

    </DefaultPage>
  );
}

export default RegisterCategory;
