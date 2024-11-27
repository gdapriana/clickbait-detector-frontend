'use client';
import {cn, Layer, Model} from "@/lib/utils";
import {ArrowDown, ArrowRight, BatteryCharging, Cog, FileX, Option} from "lucide-react";
import {Button} from "@/components/ui/button";
import {motion as m} from "framer-motion";
import {Fragment} from "react";

export const ModelStructure = ({ model}: { model: Model }) => {
  return (
    <m.div
      animate={{opacity: [0, 1], y: [100, 0]}}
      transition={{duration: 2, delay: 2, ease: "anticipate"}}
      className="flex w-full flex-col justify-start items-stretch gap-8">
      <h3
        className="scroll-m-20 text-2xl font-semibold tracking-tight">Model Architecture</h3>
      <div className="grid grid-rows-[auto_auto_auto_auto_auto_auto_auto] grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] place-items-center justify-center items-center lg:grid-rows-1">
        {model.model_config.layers.map((layer: Layer, index: number) => {
          return (
            <Fragment key={index}>
              <div
                className="border overflow-hidden rounded-xl gap-2 flex flex-col justify-start items-stretch">
                <div className="flex p-4 gap-2 flex-col justify-start items-stretch">
                  <header className="flex font-bold justify-center items-center gap-1">
                    <Cog />
                    <h1>{layer.class_name}</h1>
                  </header>
                  {layer.config.activation && (
                    <Button size="sm" variant="secondary">{layer.config.activation}</Button>
                  )}
                  
                </div>
                {index === 0 && (
                  <div className="flex justify-center items-center border-t p-2">
                    <h3 className="font-bold">{model.model_config?.layers[1]?.build_config?.input_shape[1]} Units</h3>
                  </div>
                )}
                {layer.config.units && (
                  <div className="flex justify-center items-center border-t p-2">
                    <h3 className="font-bold">{layer.config.units} Units</h3>
                  </div>
                )}
              </div>
              <div className={cn("", (model.model_config.layers.length - 1) === index && "hidden")}>
                <ArrowRight className="hidden lg:inline" />
                <ArrowDown className="lg:hidden" />
              </div>
            </Fragment>
          )
        })}
      </div>
      <div className="flex justify-center mt-8 gap-4 items-center flex-wrap">
        <div className="bg-primary rounded-xl overflow-hidden">
          <div className="flex justify-center items-center p-4">
            <h1 className="text-primary-foreground">{model.model_compile.optimizer}</h1>
          </div>
          <div className="border-t p-4 flex justify-center items-center">
            <div className="flex text-primary-foreground font-bold justify-center items-center gap-1">
              <Option className="w-4 h-4"/>
              Optimizer
            </div>
          </div>
        </div>
        <div className="bg-primary rounded-xl overflow-hidden">
          <div className="flex justify-center items-center p-4">
            <h1 className="text-primary-foreground">{model.model_compile.loss}</h1>
          </div>
          <div className="border-t p-4 flex justify-center items-center">
            <div className="flex text-primary-foreground font-bold justify-center items-center gap-1">
              <FileX className="w-4 h-4"/>
              Loss
            </div>
          </div>
        </div>
        <div className="bg-primary rounded-xl overflow-hidden">
          <div className="flex justify-center items-center p-4">
            <h1 className="text-primary-foreground">{model.model_compile.metrics[0]}</h1>
          </div>
          <div className="border-t p-4 flex justify-center items-center">
            <div className="flex text-primary-foreground font-bold justify-center items-center gap-1">
              <BatteryCharging className="w-4 h-4"/>
              Metrics
            </div>
          </div>
        </div>
      </div>
    </m.div>
  )
}