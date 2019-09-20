import React, {useState} from 'react';
import UserForm from "./Form";
import Users from "./Users";
import axios from 'axios';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  
  const addFriend = (formValues, actions) => {
    const userToPost = {
      name: formValues.name,
      email: formValues.email,
      serviceterms: formValues.serviceterms
    };
    axios.post('https://reqres.in/api/users', userToPost)
    .then(res => {
      // debugger
      const newlyCreatedUserFromServer = res.data;
      console.log(newlyCreatedUserFromServer);
      setUsers(users.concat(newlyCreatedUserFromServer));
      // console.log(userList);
      actions.resetForm();
    })
    .catch(err => {
      // debugger
      console.log(err)
    });
  };

 
  return (
    <div className="App">
      <UserForm onSubmit={addFriend} />
      <Users users={users} />
    </div>
  );
}

export default App;
