import { HandCoins } from 'lucide-react';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import ListaTransacoes from '../components/ListaTransacoes';

function Home(){

    const [transacoes, setTransacoes] = useState([
        {
            id: uuidv4(),
            valor: "140,00",
            titulo: "Academia",
            descricao: "",
            tipo: "Saída"
        },
        {
            id: uuidv4(),
            valor: "100,00",
            titulo: "Pagamento da Lucia",
            descricao: "Pagamento da Lucia",
            tipo: "Entrada"
        },
        {
            id: uuidv4(),
            valor: "280,00",
            titulo: "CDB",
            descricao: "CDB",
            tipo: "Investimento"
        },
        {
            id: uuidv4(),
            valor: "250,00",
            titulo: "Material Escolar",
            descricao: "Material Escolar",
            tipo: "Saída"
        }
    ])
    console.log(transacoes)

    return(
        <div className=""> 
            <section id="header" className="bg-sky-950 flex items-center gap-2 py-5 text-white text-2xl uppercase font-semibold ps-5 ">
                <HandCoins size={35} />Gerenciador de Finanças
            </section>

            <section className='container mx-auto'>
                <ListaTransacoes transacoes={transacoes}/>
            </section>
        </div>
    )
}

export default Home