import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import DefaultPage from '../../../components/DefaultPage';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function RegisterVideo() {
  const initialValues = {
    title: '',
    url: '',
    category: '',
  };

  const { values, handleInput } = useForm(initialValues);
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const history = useHistory();

  useEffect(() => {
    categoriesRepository.getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [
  ]);

  return (
    <DefaultPage>
      <h1>Cadastrar vídeo</h1>
      <Link to="/register/category">Nova categoria</Link>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();

        const chosenCategory = categories.find((category) => category.title === values.title);

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: chosenCategory.categoryId,
        });

        history.push('/');
      }}
      >
        <FormField
          label="Título do vídeo"
          type="text"
          name="title"
          value={values.title}
          onChange={handleInput}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleInput}
        />

        <FormField
          label="Category"
          type="text"
          name="category"
          value={values.category}
          onChange={handleInput}
          suggestions={categoryTitles}
        />

        <Button>Cadastrar</Button>
      </form>

    </DefaultPage>
  );
}

export default RegisterVideo;
