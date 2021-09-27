import React, { useState } from 'react';

interface FormValuesProps {
  name: string;
  email: string;
}

const App: React.FC = () => {

  const [formValues, setFormValues] = useState({} as FormValuesProps);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log('*** handleSubmit', data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name" onChange={handleInputChange} value={formValues.name} />

      <input type="text" name="email" placeholder="email" onChange={handleInputChange} value={formValues.email} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;