import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import ListaTransacoes from '../components/ListaTransacoes';
import AddTransacao from '@/components/AddTransacao';
import Header from '@/components/Header';
import TotalTransacoes from '@/components/TotalTransacoes';
import GraficoTransacoes from '@/components/GraficoTransacoes';

function Home(){

    const [transacoes, setTransacoes] = useState(
        JSON.parse(localStorage.getItem("transacoes")) || []
    )


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

    useEffect(() => {
        localStorage.setItem("transacoes", JSON.stringify(transacoes))
    }), [transacoes]
    
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