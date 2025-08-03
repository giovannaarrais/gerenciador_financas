import { useState } from "react";
import Input from "./Input";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import Saudacao from "./Saudacao";

function RealizarCadastro(  ){

    const navigate = useNavigate()
    const { addUser } = useOutletContext();

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const notify = () => {
        toast.warn("Preencha os campos que estão vazios!")
    }

    const notifySuccess = () => {
        toast.success('Acesso salvo com sucesso! Clique em "Fazer Login" para acessar.')
    }

    return (
        <div className="flex md:flex-row flex-col-reverse ">
            <div className="flex-1 bg-linear-to-b from-sky-500 to-sky-900 py-8 flex items-center justify-center flex-col h-screen">
                <h1 className="text-2xl text-center font-semibold text-white">
                    Realize seu Cadastro
                </h1>
                <div className="flex flex-col w-[80%] mt-4 gap-3">
                    <Input
                        type="text"
                        placeholder="Digite seu nome: "
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                    />
                    <Input
                        type="email"
                        placeholder="Digite seu email: "
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                    />
                    <Input
                        type="password"
                        placeholder="Digite sua senha: "
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                    />
                    <div className="flex  gap-2">
                        <button
                            onClick={() => {
                                if (!name.trim() || !email.trim() || !password.trim()){
                                    notify()
                                } else{
                                    addUser(name, email, password)
                                    notifySuccess()
                                }
                            }}
                            className="bg-sky-900 rounded-2xl p-2 px-6 w-[50%] text-white font-semibold"
                        >
                            Salvar Dados
                        </button>
                        <button
                            onClick={() => {
                                    navigate("/login")
                            }}
                            className="bg-sky-950 rounded-2xl p-2 px-6 w-[50%] text-white font-semibold"
                        >
                            Fazer Login
                        </button>
                    </div>
                </div>
            </div>

            <Saudacao />
        </div>
    )
}

export default RealizarCadastro;