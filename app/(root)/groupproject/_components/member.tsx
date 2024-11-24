'use client';

import {Member} from "@/lib/utils";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import { motion as m } from "framer-motion";

export const MemberContent = ({ members }: { members: Member[] }) => {
  return (
    <main className="flex justify-start items-center flex-wrap gap-8">
      {members.map((member: Member, index: number) => {
        return (
          <m.div
            animate={{ y: [100, 0], opacity: [0, 100] }}
            transition={{ duration: 1, delay: index * 0.2, ease: "anticipate" }}
            key={index} className="flex justify-center items-center gap-8">
            <Image src={member.profile || "/profile.jpeg"} width={1000} height={1000} alt="profile" className="w-20 aspect-square rounded-full overflow-hidden" />
            <div className="flex flex-1 flex-col justify-center items-start">
              <h1 className="font-bold text-2xl">{member.name}</h1>
              <Badge>{member.nim}</Badge>
            </div>
          </m.div>
        )
      })}
    </main>
  )
}