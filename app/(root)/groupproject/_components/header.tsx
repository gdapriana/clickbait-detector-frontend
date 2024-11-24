'use client';

import {motion as m} from "framer-motion";
import {Radar} from "lucide-react";
import {Badge} from "@/components/ui/badge";

export const Header = () => {
  const text = "Group Project".split(" ");
  return (
    <header className="flex gap-4 justify-center flex-col items-stretch">
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
      <div>Group project from PPM <Badge>Pengantar Pembelajaran Mesin</Badge> course</div>
    </header>
  )
}