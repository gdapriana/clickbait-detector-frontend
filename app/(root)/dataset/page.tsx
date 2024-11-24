import {DatasetSchema} from "@/lib/utils";
import {Header} from "@/app/(root)/dataset/_components/header";
import {DataTable} from "@/app/(root)/dataset/_components/table";
export default async function Page() {

  const dataset: DatasetSchema = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/dataset`)
    .then((res) => res.json())
    .then((data) => data)

  return (
    <div className="w-full h-full flex justify-center items-start">
      <div className="w-full max-w-4xl pt-20 flex gap-6 flex-col justify-start items-stretch">
        <Header dataset={dataset} />
        <DataTable dataset={dataset} />
      </div>
    </div>
  )
}