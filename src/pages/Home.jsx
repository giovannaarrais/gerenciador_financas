import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import ListaTransacoes from '../components/ListaTransacoes';
import AddTransacao from '@/components/AddTransacao';
import Header from '@/components/Header';
import FilterTransacaoes from '@/components/FiltersTransacoes';
import TotalTransacoes from '@/components/TotalTransacoes';
import GraficoTransacoes from '@/components/GraficoTransacoes';

function Home(){

    const [transacoes, setTransacoes] = useState([
        {
            id: uuidv4(),
            titulo: "Academia",
            valor: "R$ 140,00",
            tipo: "Saída",
            descricao: ""
        },
        {
            id: uuidv4(),
            titulo: "Pagamento da Lucia",
            valor: "R$ 100,00",
            tipo: "Entrada",
            descricao: "Pagamento da Lucia"
        },
        {
            id: uuidv4(),
            titulo: "CDB",
            valor: "R$ 280,00",
            tipo: "Investimento",
            descricao: "CDB"
        },
        {
            id: uuidv4(),
            titulo: "Material Escolar",
            valor: "R$ 250,00",
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
    
    return(
        <div className=""> 
            <Header />
            <section className='container mx-auto  sm:px-0 px-4'>
                <AddTransacao 
                    transacoes={transacoes}
                    salvarTransacao={salvarTransacao} 
                />

                <div className='flex md:flex-row flex-col gap-4 mt-6'>
                    <div className='flex-1 xl:max-w-[400px] md:max-w-[300px]'>
                        <div className=''>
                            <TotalTransacoes
                                transacoes={transacoes}
                            />
                        </div>
                        <div className='flex-1'>
                            <GraficoTransacoes
                                transacoes={transacoes}
                            />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <ListaTransacoes
                            transacoes={transacoes}
                            deletarTransacao={deletarTransacao}
                        />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Home