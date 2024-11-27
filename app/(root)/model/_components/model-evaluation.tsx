'use client';

import {Model} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {motion as m} from "framer-motion";
import {Bolt} from "lucide-react";

export const ModelEvaluation = ({ model}: { model: Model }) => {
  return (
    <m.div
      animate={{opacity: [0, 1], y: [100, 0]}}
      transition={{duration: 2, delay: 2.4, ease: "anticipate"}}

      className="flex w-full flex-col justify-start items-stretch gap-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight flex justify-start gap-2 items-center"><Bolt /> Model Evaluation</h3>
      <div className="flex flex-col md:flex-row gap-12 justify-start items-stretch md:justify-center md:items-center">
        <div className="relative md:w-1/2 grid grid-cols-2 grid-rows-2">
          <Badge style={{ transform: "translate(-50%, -50%)"}} className="absolute left-1/2 top-1/2 whitespace-nowrap">Confusion Matrix</Badge>
          <div className="flex rounded-tl-2xl flex-col justify-center p-4 border items-center">
            <h1 className="text-2xl font-bold">{model.evaluate.con_matrix.tp}</h1>
            <span className="text-muted-foreground">True Positive</span>
          </div>
          <div className="flex flex-col rounded-tr-2xl justify-center p-4 border items-center">
            <h1 className="text-2xl font-bold">{model.evaluate.con_matrix.fn}</h1>
            <span className="text-muted-foreground">False Negative</span>
          </div>
          <div className="flex flex-col rounded-bl-2xl justify-center p-4 border items-center">
            <h1 className="text-2xl font-bold">{model.evaluate.con_matrix.fp}</h1>
            <span className="text-muted-foreground">False Positive</span>
          </div>
          <div className="flex flex-col rounded-br-2xl justify-center p-4 border items-center">
            <h1 className="text-2xl font-bold">{model.evaluate.con_matrix.tn}</h1>
            <span className="text-muted-foreground">True Negative</span>
          </div>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2">
          <div className="md:col-span-2 flex-col md:border-b p-4 flex justify-center items-center">
            <h1 className="font-bold text-3xl">{model.evaluate.accuracy * 100}%</h1>
            <p className="text-muted-foreground">Accuracy</p>
          </div>
          <div className="p-4 md:border-r flex-col flex justify-center items-center">
            <h1 className="font-bold text-xl">{(model.evaluate.precision * 100).toFixed(2)}%</h1>
            <p className="text-muted-foreground">Precision</p>
          </div>
          <div className="p-4 flex-col flex justify-center items-center">
            <h1 className="font-bold text-xl">{(model.evaluate.recall * 100).toFixed(2)}%</h1>
            <p className="text-muted-foreground">Recall</p>
          </div>
        </div>
      </div>
    </m.div>
  )
}
