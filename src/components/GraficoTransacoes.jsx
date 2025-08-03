"use client"

import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

function GraficoTransacoes( { transacoes }) {

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
        }

        if(transacao.tipo === "Entrada"){
            totalEntradas += valorNumerico
        }

        if(transacao.tipo === "Investimento"){
            totalInvestimentos += valorNumerico
        }
    })

    const chartData = [
        { browser: "Saídas", visitors: totalSaidas, fill: "var(--color-chrome)" },
        { browser: "Entradas", visitors: totalEntradas, fill: "var(--color-safari)" },
        { browser: "Investimentos", visitors: totalInvestimentos, fill: "var(--color-firefox)" },
    ]

  // Apenas objeto de configuração, sem TypeScript
    const chartConfig = {
        chrome: {
            label: "Saídas",
            color: "var(--chart-1)",
        },
            safari: {
            label: "Entradas",
            color: "var(--chart-2)",
        },
            firefox: {
            label: "Investimentos",
            color: "var(--chart-3)",
        }
    }
    

  return (
    <section>
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
            <CardTitle>Gráfico de Transações</CardTitle>
            {/* <CardDescription>January - June 2024</CardDescription> */}
            </CardHeader>
            <CardContent className="flex-1 pb-0">
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px] px-0"
            >
                <PieChart>
                <ChartTooltip
                    content={<ChartTooltipContent nameKey="visitors" hideLabel />}
                />
                <Pie
                    data={chartData}
                    dataKey="visitors"
                    labelLine={false}
                    label={({ payload, ...props }) => {
                    return (
                        <text
                        cx={props.cx}
                        cy={props.cy}
                        x={props.x}
                        y={props.y}
                        textAnchor={props.textAnchor}
                        dominantBaseline={props.dominantBaseline}
                        fill="hsla(var(--foreground))"
                        >
                        {payload.visitors}
                        </text>
                    )
                    }}
                    nameKey="browser"
                />
                </PieChart>
            </ChartContainer>
            </CardContent>
        </Card>
    </section>
  )
}

export default GraficoTransacoes
