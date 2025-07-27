import { HandCoins } from 'lucide-react';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import ListaTransacoes from '../components/ListaTransacoes';
import AddTransacao from '@/components/AddTransacao';

function Home(){

    const [transacoes, setTransacoes] = useState([
        {
            id: uuidv4(),
            titulo: "Academia",
            valor: "140,00",
            tipo: "Saída",
            descricao: ""
        },
        {
            id: uuidv4(),
            titulo: "Pagamento da Lucia",
            valor: "100,00",
            tipo: "Entrada",
            descricao: "Pagamento da Lucia"
        },
        {
            id: uuidv4(),
            titulo: "CDB",
            valor: "280,00",
            tipo: "Investimento",
            descricao: "CDB"
        },
        {
            id: uuidv4(),
            titulo: "Material Escolar",
            valor: "250,00",
            tipo: "Saída",
            descricao: "Material Escolar"
        }
    ])

    function salvarTransacao(titulo, valor, tipo, descricao){
        const newTransacao = {
            id: uuidv4(),
            titulo,
            valor,
            tipo,
            descricao
        }

        setTransacoes([...transacoes, newTransacao])
    }
    
    console.log(transacoes)

    return(
        <div className=""> 
            <section id="header" className="bg-sky-950 flex items-center gap-2 py-5 text-white text-2xl uppercase font-semibold ps-5 ">
                <HandCoins size={35} />Gerenciador de Finanças
            </section>

            <section className='container mx-auto'>
                <AddTransacao 
                    transacoes={transacoes}
                    salvarTransacao={salvarTransacao} 
                />

                <ListaTransacoes 
                    transacoes={transacoes}
                />
            </section>
        </div>
    )
}

export default Home