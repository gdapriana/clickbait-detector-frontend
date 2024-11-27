'use client';

import {useState} from "react";
import {InputForm} from "@/app/(root)/predict/_components/form";
import {Result} from "@/app/(root)/predict/_components/result";
import {motion as m} from "framer-motion";
import {Skeleton} from "@/components/ui/skeleton";

export default function Page() {
  const [result, setResult] = useState<number | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-4xl flex gap-6 flex-col justify-center items-start">
        <m.h1
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 2, ease: 'anticipate' }}
          className="scroll-m-20 flex md:justify-start items-start justify-center flex-col md:flex-row md:items-center gap-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Predict News Clickbait
        </m.h1>
        <m.div
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 2, delay: 0.4, ease: 'anticipate' }}
          className="w-full">
          <InputForm setResult={setResult} loading={loading} setLoading={setLoading} />
        </m.div>
        <div className="w-full mt-8">
          {loading && <Skeleton><div className="w-full h-10 flex justify-center items-center">Loading...</div></Skeleton>}
          {result !== undefined && !loading && <Result result={result} />}
        </div>
      </div>
    </div>
  )
}