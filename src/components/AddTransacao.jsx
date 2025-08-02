import { useState } from "react";
import Input from "./Input";
import { toast } from 'react-toastify';


function AddTransacao( { props, salvarTransacao }){

    const [titulo, setTitulo] = useState("")
    const [valor, setValor] = useState("")
    const [tipo, setTipo] = useState("")
    const [descricao, setDescricao] = useState("")

    //  Função para criar a máscara de R$
    function handleChange(e) {
        const somenteNumeros = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
        const numero = (parseInt(somenteNumeros, 10) || 0) / 100; // Divide por 100 para ter casas decimais
        setValor(numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
    }

    // utilizacao do react toastify para lidar com alertas
    const notify = () => {
        toast.warn("Preencha os campos vazios!");
    }

    return (
        <section className="grid md:grid-cols-2 my-13 mx-auto">
            <article className="w-auto mx-auto pr-8">
                Cadastre todas as suas transações financeiras de forma simples e rápida. Ao registrar entradas, saídas e investimentos, você terá uma visão mais clara de como o seu dinheiro está sendo utilizado.
                <br />
                <br />
                Mantenha um histórico organizado e obtenha mais controle sobre seus gastos para planejar o futuro com segurança.
            </article>
            <article className="flex flex-col gap-2 lg:w-[450px] lg:mx-auto">
                <Input 
                    type="text"
                    placeholder="Digite o titulo:"
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                    
                />

                <Input 
                    type="text"
                    placeholder="Digite o valor:"
                    value={valor}
                    onChange={handleChange}
                />

                <select 
                    className="bg-white border-1 border-sky-400 rounded-2xl px-3 py-2 w-full outline-sky-200"
                    value={tipo}
                    onChange={(event) => setTipo(event.target.value)}
                >
                    <option value="" disabled>-- Selecione --</option>
                    <option value="Saída" >Saída</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Investimento">Investimento</option>
                </select>

                <textarea 
                    placeholder="Digite a descrição:"
                    rows={4}
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                    className="bg-white border-1 border-sky-400 rounded-2xl px-3 py-2 w-full outline-sky-200">

                </textarea>

                <button
                    className=" bg-sky-600 hover:bg-sky-800 transition-all py-2 px-4 mt-3 ms-auto text-white uppercase text-sm font-semibold rounded-sm w-max"
                    onClick={() => {
                        if (!titulo.trim() || !tipo.trim() || !valor.trim()){
                            notify();
                        } else{
                            salvarTransacao(titulo, valor, tipo, descricao)
                        }
                    }}
                >
                    Salvar Transação
                </button>
            </article>
        </section>
    )
}

export default AddTransacao;