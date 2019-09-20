import React, {useState} from 'react';
import UserForm from "./Form";
import axios from 'axios';

import './App.css';

function App() {
  const [userList, setUserList] = useState([]);
  
  const addFriend = (formValues, actions) => {
    const userToPost = {
      name: formValues.name,
      email: formValues.email,
    };
    axios.post('https://reqres.in/api/users', userToPost)
    .then(res => {
      // debugger
      const newlyCreatedUserFromServer = res.data;
      console.log(newlyCreatedUserFromServer);
      setUserList(userList.concat(newlyCreatedUserFromServer));
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
    </div>
  );
}

export default App;
