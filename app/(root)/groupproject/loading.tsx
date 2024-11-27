import {Skeleton} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-start">
      <div className="w-full max-w-4xl pt-20 flex gap-6 flex-col justify-start items-stretch">
        <Skeleton>
          <div className="w-full h-40"></div>
        </Skeleton>
        <div className="w-full h-40 gap-4 grid grid-cols-3">
          <Skeleton>
            <div className="h-20"></div>
          </Skeleton>
          <Skeleton>
            <div className="h-20"></div>
          </Skeleton>
          <Skeleton>
            <div className="h-20"></div>
          </Skeleton>
        </div>
      </div>
    </div>
  )
}