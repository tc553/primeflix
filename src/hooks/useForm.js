import { useState } from 'react';

function useForm(initialValues) {
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

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleInput,
    clearForm,
  };
}

export default useForm;
