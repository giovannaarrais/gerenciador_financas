import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


function TotalTransacoes( { transacoes }){

    let totalSaidas = 0;
    let totalEntradas = 0;
    let totalInvestimentos = 0;
    // calculo total de saidas, entradas e investimentos
    transacoes.map((transacao) => {
        if(transacao.tipo === "Saída"){
            totalSaidas += transacao.valor

            console.log(totalSaidas)
        }

        if(transacao.tipo === "Entrada"){
            totalEntradas += transacao.valor

            console.log(totalEntradas)
        }

        if(transacao.tipo === "Investimento"){
            totalInvestimentos += transacao.valor

            console.log(totalInvestimentos)
        }
    })


    return(
        <section className="border-0 border-t-1 border-t-sky-200 ">
            
        </section>
    )
}

export default TotalTransacoes;
