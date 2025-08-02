import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import {  Outlet, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const navigate = useNavigate()

  const [users, setUsers] = useState([
    {
      id: uuidv4(),
      name: "Giovanna",
      email: "giovanna@gmail.com",
      password: "123",
    },
    {
      id: uuidv4(),
      name: "Lucas",
      email: "lucas@gmail.com",
      password: "123",
    },
  ]);

  // add novo usuario
  function addUser(name, email, password){
    const newUser = {
      id: uuidv4(),
      name,
      email,
      password
    }

    setUsers([...users, newUser])
  }
  console.log(users)
  
  return (
      <div>
        <Outlet context={{ users, addUser }}/>
        <ToastContainer />
      </div>
  );
}

export default App;
