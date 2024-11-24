'use client';

import {motion as m} from "framer-motion";
import {Radar} from "lucide-react";
import {DatasetSchema} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {type ChartConfig, ChartContainer} from "@/components/ui/chart"
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export const Header = ({ dataset }: { dataset: DatasetSchema | undefined}) => {
  const text = dataset?.dataset_title.split(" ")

  const chartData = [
    { label: "Label", trueLabel: dataset?.true_label, falseLabel: dataset?.false_label }
  ]

  const chartConfig = {
    trueLabel: {
      label: "True",
      color: "#ffffff",
    },
    falseLabel: {
      label: "False",
      color: "#60a5fa",
    },
  } satisfies ChartConfig

  return (
    <header className="flex flex-col gap-4 justify-start items-stretch">
      <h1
        className="scroll-m-20 flex md:justify-start items-start justify-center flex-col md:flex-row md:items-center gap-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <m.div
          animate={{rotate: [360, 0]}}
          transition={{ease: 'anticipate', duration: 2}}
        >
          <Radar className="inline w-14 h-14"/>
        </m.div>
        {text?.map((el, i) => (
          <m.span
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </m.span>
        ))}
      </h1>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className="flex gap-2 md:flex-1 w-full md:w-auto flex-col justify-center items-start">
          <p>{dataset?.dataset_subtitle}</p>
          <div className="flex gap-2">
            <div className="flex flex-col rounded-xl justify-start items-center gap-2 p-4 bg-secondary">
              <h1 className="font-bold text-xl">{dataset?.total_dataset}</h1>
              <p className="text-muted-foreground">Total Dataset</p>
            </div>
            <div className="flex flex-col rounded-xl justify-start items-center gap-2 p-4 bg-secondary">
              <h1 className="font-bold text-xl">{dataset?.true_label}</h1>
              <p className="text-muted-foreground">Total True Label</p>
            </div>
            <div className="flex flex-col rounded-xl justify-start items-center gap-2 p-4 bg-secondary">
              <h1 className="font-bold text-xl">{dataset?.false_label}</h1>
              <p className="text-muted-foreground">Total False Label</p>
            </div>
          </div>
          <Button asChild className="rounded-full" variant="secondary">
            <Link target="_blank" href={dataset?.dataset_link || ""}>
              Go to Kaggle Page
            </Link>
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid />
              <XAxis
                dataKey="label"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="trueLabel" fill="blue" radius={4} />
              <Bar dataKey="falseLabel" fill="purple" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </header>
  )
}