'use client';

import {useState} from "react";
import {FormInput} from "lucide-react";
import {InputForm} from "@/app/(root)/predict/_components/form";
import {Result} from "@/app/(root)/predict/_components/result";

export default function Page() {
  const [result, setResult] = useState<number | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-4xl flex gap-6 flex-col justify-center items-start">
        <h1 className="scroll-m-20 flex md:justify-start items-start justify-center flex-col md:flex-row md:items-center gap-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Predict News Clickbait
        </h1>
        <div className="w-full">
          <InputForm setResult={setResult} loading={loading} setLoading={setLoading} />
        </div>
        <div className="w-full mt-8">
          {loading && <div className="w-full flex justify-center items-center">Loading...</div>}
          {result !== undefined && !loading && <Result result={result} />}
        </div>
      </div>
    </div>
  )
}