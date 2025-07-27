import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useSearchParams } from "react-router-dom";
import { ArrowDownCircle, ArrowUpCircle, TrendingUp, HandCoins, MoveLeft  } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TransacaoPage(){

    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    
    const id = searchParams.get("id")
    const titulo = searchParams.get("titulo")
    const valor = searchParams.get("valor")
    const tipo = searchParams.get("tipo")
    const descricao = searchParams.get("descricao")
    function backPage(){
        navigate(-1)
    }
    

    return (
        <section>
            <section id="header" className="bg-sky-950 flex items-center gap-2 py-5 text-white text-2xl uppercase font-semibold ps-5 ">
                <HandCoins size={35} />Gerenciador de Finanças
            </section>
            <div className="container mx-auto mt-15">
                <div className="flex gap-5 mb-6">
                    <span 
                        onClick={backPage}
                        className="cursor-pointer"
                    >
                        <MoveLeft />
                    </span>

                    <h2 className="border-b-1 border-sky-400 uppercase font-semibold text-sky-400 w-full">Detalhes sobre a Transação</h2>
                </div>
                <Card key={id} className={" pt-0"}>
                        <CardHeader className={'bg-sky-800 rounded-t-lg text-white py-3'}>
                            <CardTitle>{titulo}</CardTitle>
                        </CardHeader>

                        <CardContent className={""}>
                            <CardDescription className={"flex flex-col"}>
                                <span className="mb-2">
                                    Valor: R$ {valor}
                                </span>

                                <span className="flex gap-2 mb-2"> Tipo: 
                                    <span className={`flex text-semibold gap-1 
                                        ${tipo == "Saída" && "text-red-600" ||
                                        tipo == "Entrada" &&
                                        "text-green-600" ||
                                        tipo == "Investimento" &&
                                        "text-yellow-600"
                                        }`}>

                                        {
                                            tipo === "Saída" && <ArrowDownCircle size={20}/> ||

                                            tipo === "Entrada" && <ArrowUpCircle size={20}/> || 

                                            tipo === "Investimento" && <TrendingUp size={20}/>} 
                                            {tipo
                                        }
                                    </span>
                                </span>

                                <span className="mb-2">
                                    Descricao: {descricao}
                                </span>
                            </CardDescription>
                        
                        </CardContent>
                    </Card>
                </div>
        </section>
    )
}

export default TransacaoPage;