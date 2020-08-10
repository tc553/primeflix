import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import DefaultPage from '../../../components/DefaultPage';
import useForm from '../../../hooks/useForm';
import config from '../../../config';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function RegisterVideo() {
  const initialValues = {
    title: '',
    url: '',
    category: '',
  };

  const { values, handleInput } = useForm(initialValues);
  const [videos, setVideos] = useState([]);
  const history = useHistory();

  //   useEffect(() => {
  //     videosRepository.create({
  //       title: values.title,
  //       url: values.url,
  //       categoryId: 1,
  //     });
  //   }, [
  //   ]);

  return (
    <DefaultPage>
      <h1>Cadastrar vídeo</h1>
      <Link to="/register/category">Nova categoria</Link>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: 2,
        });

        history.push('/');
        // clearForm();
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
        />

        <Button>Cadastrar</Button>
      </form>

    </DefaultPage>
  );
}

export default RegisterVideo;
