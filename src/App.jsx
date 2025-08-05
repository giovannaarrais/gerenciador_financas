import { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const navigate = useNavigate();

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    localStorage.getItem("users", JSON.stringify(users));
  }),
    [users];

  // add novo usuario
  function addUser(name, email, password) {
    const newUser = {
      id: uuidv4(),
      name,
      email,
      password,
    };

    setUsers([...users, newUser]);
  }

  return (
    <div>
      <Outlet context={{ users, addUser }} />
      <ToastContainer />
    </div>
  );
}

export default App;
