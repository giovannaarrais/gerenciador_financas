import { useState } from "react";
import Input from "./Input";
import { useNavigate, useOutletContext } from "react-router-dom";


function RealizarCadastro(  ){

    const navigate = useNavigate()
    const { addUser } = useOutletContext();

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    return (
        <div className="bg-sky-500 mr-auto w-[50%]   flex items-center justify-center flex-col h-screen">
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

                <div className="flex justify-between items-center">
                    <button 
                        onClick={() => {
                            
                                addUser(name, email, password)
                                navigate("/login")
                        }}
                        className="bg-sky-900 rounded-2xl p-2 px-6 text-white font-semibold"
                    >
                        Fazer Login
                    </button>
                </div>
            </div>
            </div>
    )
}

export default RealizarCadastro;