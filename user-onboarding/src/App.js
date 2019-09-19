import React from 'react';
import Form from "./Form";
import './App.css';

function App() {

  const validationSchema = yup.object().shape({
    name: yup.string()
    .min(2, 'Your name is too short!')
    .max(50, 'You have a longer name than we can handle!')
    .required('Kindly input your name'),
    password: yup.string()
    .min(7, 'Add to your password')
    .max(20, 'You probably won\'t be able to remember this. Password length should be from 7-20 characters!')
    .required('We need your password')
  });
  return (
    <div className="App">
      <Form validationSchema = {validationSchema}/>
    </div>
  );
}

export default App;
