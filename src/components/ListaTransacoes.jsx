import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ArrowDownCircle, ArrowUpCircle, TrendingUp, Trash2, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ListaTransacoes( { transacoes, deletarTransacao } ){

    const navigate = useNavigate()

    function verDetalhes(transacao){
        const query = new URLSearchParams();

        query.set("id", transacao.id);
        query.set("titulo", transacao.titulo);
        query.set("valor", transacao.valor);
        query.set("tipo", transacao.tipo);
        query.set("descricao", transacao.descricao);
        console.log(query)

        navigate(`/transacao?${query.toString()}`)
    }

    const notify = (transacaoTitulo) => {
        toast.info(` ${transacaoTitulo} foi excluído com sucesso!`)
    }

    return (
        <section className="mt-10 gap-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 border-0 border-t-1 border-t-sky-200 pt-5">
            <div className={`${transacoes.length == 0 ? 'block absolute text-sky-500 font-semibold border-0 border-b-1 border-sky-500' : 'hidden'}`}>
                {transacoes.length == 0 && "Nenhuma Transação encontrada! Cadastre no formulário acima."}
            </div>
            {transacoes.map((transacao) => (
                <Card key={transacao.id} className={" pt-0 relative"}>
                    <div className="actions absolute top-[-11px] right-0 flex  gap-1">
                        <CardAction 
                            className={"cursor-pointer  bg-red-700 p-1.5 text-white rounded-full"}
                            onClick={() => {
                                notify(transacao.titulo)
                                deletarTransacao(transacao.id)
                            }}
                        > 
                            < Trash2 size={18}/> 
                        </CardAction>

                        <CardAction 
                            className={"cursor-pointer  bg-yellow-500 p-1.5 text-white rounded-full"}
                            onClick={() => {
                                alert("editar")
                            }}
                        > 
                            < Pencil  size={18}/> 
                        </CardAction>
                    </div>
                    <CardHeader className={'bg-sky-800 rounded-t-lg text-white pt-4 pb-2  d-flex items-center justify-between '}>
                        <CardTitle className={"mb-0"}>{transacao.titulo}</CardTitle>
                    </CardHeader>

                    <CardContent className={""}>
                        <CardDescription className={"flex flex-col"}>
                            <span className="mb-2">
                                Valor: {transacao.valor}
                            </span>

                            <span className="flex gap-2"> Tipo: 
                                <span className={`flex text-semibold gap-1 
                                    ${transacao.tipo == "Saída" && "text-red-600" ||
                                    transacao.tipo == "Entrada" &&
                                    "text-green-600" ||
                                    transacao.tipo == "Investimento" &&
                                    "text-yellow-600"
                                    }`}>

                                    {
                                        transacao.tipo === "Saída" && <ArrowDownCircle size={20}/> ||

                                        transacao.tipo === "Entrada" && <ArrowUpCircle size={20}/> || 

                                        transacao.tipo === "Investimento" && <TrendingUp size={20}/>} 
                                        {transacao.tipo
                                    }
                                </span>
                            </span>
                        </CardDescription>

                        <CardAction className={"w-full mt-7"}>
                                <button 
                                onClick={() =>{
                                    verDetalhes(transacao)
                                }}
                                type="button"
                                className=" bg-sky-600 hover:bg-sky-800 transition-all py-1 text-white uppercase text-sm font-semibold rounded-sm w-full"
                            >
                                Ver detalhes
                            </button>
                        </CardAction>
                    </CardContent>
                </Card>
            ))}
        </section>
    )
}

export default ListaTransacoes;