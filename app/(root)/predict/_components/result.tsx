import { motion as m } from "framer-motion";
import {cn} from "@/lib/utils";

export const Result = ({ result }: { result: number }) => {
  return (
    <main className="w-full flex flex-col gap-4 justify-start items-center">
      <div className="border p-1 rounded-full w-full">
        <m.div
          animate={{width: [0, `${result}%`]}}
          transition={{duration: 2, ease: "anticipate"}}
          className={cn("w-0 rounded-full h-2", result < 50 ? "bg-teal-400" : "bg-rose-400")}>
        </m.div>
      </div>
      <h4 className="text-lg">The news has <span className="font-bold">{result}%</span> posibility Clickbait</h4>
    </main>
  )
}