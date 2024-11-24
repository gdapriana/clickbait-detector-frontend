import {Member} from "@/lib/utils";
import {Header} from "@/app/(root)/groupproject/_components/header";
import {MemberContent} from "@/app/(root)/groupproject/_components/member";

const groupMember: Member[] = [
  {name: "I Komang Gede Apriana", nim: "2108561031"},
  {name: "I Komang Sutrisna Eka Wijaya", nim: "2108561032"},
  {name: "I Gusti Agung Ngurah Diputra Wiraguna", nim: "2108561075"},
]

export default async function Page() {
  return (
    <div className="w-full h-full flex justify-center items-start">
      <div className="w-full pb-8 max-w-4xl pt-20 flex gap-12 flex-col justify-start items-stretch">
        <Header />
        <MemberContent members={groupMember} />
      </div>
    </div>
  )
}