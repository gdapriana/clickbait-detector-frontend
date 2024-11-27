'use client';

import Image from "next/image";
import {Model} from "@/lib/utils";
import {motion as m} from "framer-motion";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {LinkIcon} from "lucide-react";

export const Header = ({model}: { model: Model }) => {
  return (
    <div className="w-full flex flex-col justify-start items-stretch gap-4">
      <header className="flex justify-start items-center gap-4 flex-wrap">
        <m.div
          animate={{opacity: [0, 1], filter: ["blur(50px)", "blur(0)"]}}
          transition={{duration: 2, ease: "anticipate"}}
        >
          <Image className="w-20" src={model.lib_info.logo} alt={model.lib_info.name} width={1000} height={1000}/>
        </m.div>
        <m.h1
          animate={{opacity: [0, 1]}}
          transition={{duration: 2, delay: 1, ease: "anticipate"}}
          className="scroll-m-20 flex md:justify-start items-start justify-center flex-col md:flex-row md:items-center gap-2 text-4xl font-extrabold tracking-tight lg:text-5xl">{model.lib_info.name}</m.h1>
      </header>
      <m.p
        animate={{opacity: [0, 1], y: [100, 0]}}
        transition={{duration: 2, delay: 1.4, ease: "anticipate"}}
      >{model.lib_info.description}</m.p>
      <m.div
        className="ms-auto"
        animate={{opacity: [0, 1], y: [100, 0]}}
        transition={{duration: 2, delay: 1.8, ease: "anticipate"}}
      >
        <Button asChild className="rounded-full" size="lg">
          <Link href={model.lib_info.source}>
            <LinkIcon /> {model.lib_info.name} Documentation
          </Link>
        </Button>
      </m.div>
    </div>
  )
}