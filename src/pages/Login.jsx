import { useState } from "react";
import Input from "../components/Input";
import { useNavigate, useOutletContext } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import Saudacao from "@/components/Saudacao";


function Login() {
  const navigate = useNavigate();
  const { users } = useOutletContext();

  const notify = () => {
    toast.warn("Dados de acesso incorretos. Tente novamente!")
  }

  function Cadastre() {
      navigate("/cadastro")
  }

  // captura valores do input
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  // ACESSAR A HOME
  function Acessar(){
    const userEncontrado = users.find(
      user => user.email === email && user.password === password
    )

    if (userEncontrado){
      navigate("/home")

    } else{
      notify()
    }
  }


  return (
    <div className="flex">
      <div className="flex-1 bg-sky-500 mr-auto  flex items-center justify-center flex-col h-screen">
        <h1 className="text-2xl text-center font-semibold text-white">
          Realize seu login
        </h1>
        <div className="flex flex-col w-[80%] mt-4 gap-3">
          <Input
            type="email"
            placeholder="Digite seu email: "
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Digite sua senha: "
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="flex justify-between items-center">
            <button
              onClick={Cadastre}
              className="text-white font-semibold underline"
            >
              Cadastre-se
            </button>
            <button
              onClick={Acessar}
              className="bg-sky-900 rounded-2xl p-2 px-6 text-white font-semibold"
            >
              Acessar
            </button>
          </div>
        </div>
      </div>

      <Saudacao />
    </div>
  );
}

export default Login;
