import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ArrowDownCircle, ArrowUpCircle, TrendingUp } from "lucide-react";

function ListaTransacoes( props ){
    console.log(props)
    return (
        <section className="mt-10 gap-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {props.transacoes.map((transacao) => (
                <Card key={transacao.id} className={" pt-0"}>
                    <CardHeader className={'bg-sky-800 rounded-t-lg text-white py-3'}>
                        <CardTitle>{transacao.titulo}</CardTitle>
                    </CardHeader>

                    <CardContent className={""}>
                        <CardDescription className={"flex flex-col"}>
                            <span className="mb-2">
                                Valor: R${transacao.valor}
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