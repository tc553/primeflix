import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DefaultPage from '../../../components/DefaultPage';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

function RegisterCategory() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const { values, handleInput } = useForm(initialValues);
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    categoriesRepository.getAll()
      .then((categoriesFromServer) => {
        setCategories([
          ...categoriesFromServer,
        ]);
      })
      .catch((err) => {
        console.log(err.message);
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

        categoriesRepository.create({
          title: values.title,
          description: values.description,
          color: values.color,
        });

        history.push('/');
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

      <p>Categorias existentes:</p>
      <ul>
        { categories.map((category, index) => (<li key={`${category}${index}`}>{ category.title }</li>)) }
      </ul>

    </DefaultPage>
  );
}

export default RegisterCategory;
