import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"


function TotalTransacoes( { transacoes }){

    let totalSaidas = 0;
    let totalEntradas = 0;
    let totalInvestimentos = 0;
    // calculo total de saidas, entradas e investimentos
    transacoes.forEach((transacao) => {
        const valorNumerico = parseFloat(
            transacao.valor.replace("R$", "").replace(/\./g, "").replace(",", ".")
        );

        if(transacao.tipo === "Saída"){
            totalSaidas += valorNumerico

            console.log(totalSaidas)
        }

        if(transacao.tipo === "Entrada"){
            totalEntradas += valorNumerico

            console.log(totalEntradas)
        }

        if(transacao.tipo === "Investimento"){
            totalInvestimentos += valorNumerico

            console.log(totalInvestimentos)
        }
    })


    return(
        <section className="flex gap-2 border-0 border-t-1 border-t-sky-200 pt-6">
            <Card className={"gap-0  p-2  flex-1 border-0 border-l-3 border-red-700"}>
                <CardHeader className={"px-3"}>
                    <CardDescription>Total Saídas</CardDescription>
                </CardHeader>
                <CardContent className={"text-red-500 font-bold px-3 text-lg"}>
                    <p>R$ {totalSaidas}</p>
                </CardContent>
            </Card>

            <Card className={"gap-0  p-2 flex-1 border-0 border-l-3 border-green-700"}>
                <CardHeader className={"px-3"}>
                    <CardDescription>Total Entradas</CardDescription>
                </CardHeader>
                <CardContent className={"text-green-600 font-bold px-3 text-lg"}>
                    <p>R$ {totalEntradas}</p>
                </CardContent>
            </Card>

            <Card className={"gap-0  p-2 flex-1 border-0 border-l-3 border-l-3 border-yellow-600"}>
                <CardHeader className={"px-3"}>
                    <CardDescription>Total Investidos</CardDescription>
                </CardHeader>
                <CardContent className={"text-yellow-600 font-bold px-3 text-lg"}>
                    <p>R$ {totalInvestimentos}</p>
                </CardContent>
            </Card>
        </section>
    )
}

export default TotalTransacoes;
