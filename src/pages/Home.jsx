import { HandCoins } from 'lucide-react';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import ListaTransacoes from '../components/ListaTransacoes';
import AddTransacao from '@/components/AddTransacao';
import Header from '@/components/Header';
import FilterTransacaoes from '@/components/FiltersTransacoes';

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

    function deletarTransacao(transacaoId){
        const newTransacao = transacoes.filter((transacao) =>
            transacao.id !== transacaoId)

        setTransacoes(newTransacao)
    }
    
    console.log(transacoes)

    return(
        <div className=""> 
            <Header />
            <section className='container mx-auto'>
                <AddTransacao 
                    transacoes={transacoes}
                    salvarTransacao={salvarTransacao} 
                />

                <div><FilterTransacaoes /></div>

                <ListaTransacoes 
                    transacoes={transacoes}
                    deletarTransacao={deletarTransacao}
                />
            </section>
        </div>
    )
}

export default Home