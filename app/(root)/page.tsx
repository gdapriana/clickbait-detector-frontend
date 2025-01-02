'use client';

import {FlaskConical, Package, Radar, Table, Users} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {motion as m} from "framer-motion";

export default function Home() {

  const text = process.env.NEXT_PUBLIC_APP?.split(" ");

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-4xl flex gap-6 flex-col justify-center items-start">
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
        <m.h4
          animate={{opacity: [0, 1], y: [100, 0]}}
          transition={{ease: 'anticipate', duration: 2}}
          className="scroll-m-20 text-muted-foreground text-xl tracking-tight"
        >
          Stay Informed, Not Deceived: Our App Detects Clickbait in News Headlines to Ensure You Read What Truly
          Matters!
        </m.h4>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <m.div
            animate={{opacity: [0, 1], y: [100, 0]}}
            transition={{ease: 'anticipate', duration: 2, delay: 1}}
          >
            <Button variant="default" asChild className="rounded-full px-10 py-8 font-bold">
              <Link href="/predict" className="text-lg"><FlaskConical/> Detect Now!</Link>
            </Button>
          </m.div>

          <m.div
            animate={{opacity: [0, 1], y: [100, 0]}}
            transition={{ease: 'anticipate', duration: 2, delay: 1.2}}
          >
            <Button variant="outline" asChild className="rounded-full px-10 py-8 font-bold">
              <Link href="/model" className="text-lg"><Package/> Model</Link>
            </Button>
          </m.div>

          <m.div
            animate={{opacity: [0, 1], y: [100, 0]}}
            transition={{ease: 'anticipate', duration: 2, delay: 1.4}}
          >
            <Button variant="outline" asChild className="rounded-full px-10 py-8 font-bold">
              <Link href="/dataset" className="text-lg"><Table/> Check Dataset</Link>
            </Button>
          </m.div>

          <m.div
            animate={{opacity: [0, 1], y: [100, 0]}}
            transition={{ease: 'anticipate', duration: 2, delay: 1.6}}
          >
            <Button variant="outline" asChild className="rounded-full px-10 py-8 font-bold">
              <Link href="/groupproject" className="text-lg"><Users/> Group Project</Link>
            </Button>
          </m.div>
        </div>
      </div>
    </div>
  );
}