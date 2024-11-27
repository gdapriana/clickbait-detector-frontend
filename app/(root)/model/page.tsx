import {Model} from "@/lib/utils";
import Image from "next/image";
import {Header} from "@/app/(root)/model/_components/header";
import {ModelStructure} from "@/app/(root)/model/_components/model-structure";
import {ModelEvaluation} from "@/app/(root)/model/_components/model-evaluation";

export default async function Page() {
  const model: Model = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/model`)
    .then((res) => res.json())
    .then((data) => data)

  return (
    <div className="w-full h-full flex justify-center items-start">
      <div className="w-full max-w-4xl pt-20 flex gap-6 flex-col justify-start items-stretch">
        <Header model={model} />
        <ModelStructure model={model}/>
        <ModelEvaluation model={model}/>
      </div>
    </div>
  )
}