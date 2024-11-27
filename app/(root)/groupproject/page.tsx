import {Member} from "@/lib/utils";
import {Header} from "@/app/(root)/groupproject/_components/header";
import {MemberContent} from "@/app/(root)/groupproject/_components/member";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Group Project | CD",
  description: "Homepage",
};

export default async function Page() {

  const groupMember: Member[] = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/member`)
    .then(res => res.json())
    .then((member) => member.all_member)

  console.log(groupMember)

  return (
    <div className="w-full h-full flex justify-center items-start">
      <div className="w-full pb-8 max-w-4xl pt-20 flex gap-12 flex-col justify-start items-stretch">
        <Header />
        <MemberContent members={groupMember} />
      </div>
    </div>
  )
}