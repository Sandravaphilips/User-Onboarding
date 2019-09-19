import React, {useState} from 'react';
import UserForm from "./Form";
import axios from 'axios';
import * as yup from 'yup';
import './App.css';

function App() {
  const [userList, setUserList] = useState([]);
  const addFriend = (formValues, actions) => {
    const userToPost = {
      name: formValues.name,
      age: formValues.age,
    };
    axios.post('https://reqres.in/api/users', userToPost)
    .then(res => {
      const newLyCreatedUserFromServer = res.data;
      setUserList(userList.concat(newLyCreatedUserFromServer));
      console.log(userList);
      actions.resetForm();
    })
    .catch(err => {
      console.log(err)
    });
  };

  const validationSchema = yup.object().shape({
    name: yup.string()
    .min(2, 'Your name is too short!')
    .max(50, 'You have a longer name than we can handle!')
    .required('Kindly input your name'),
    password: yup.string()
    .min(7, 'Add more characters to your password')
    .max(20, 'You probably won\'t be able to remember this. Password length should be from 7-20 characters!')
    .required('We need your password'),
    serviceterms: yup.bool()
    .oneOf([true], "Must agree to terms of service!")
  });
  return (
    <div className="App">
      <UserForm validationSchema = {validationSchema}/>
    </div>
  );
}

export default App;
