import {Skeleton} from "@/components/ui/skeleton";

export default function  Loading () {
  return (
    <div className="w-full h-full flex justify-center items-start">
      <div className="w-full max-w-4xl pt-20 flex gap-6 flex-col justify-start items-stretch">
        <Skeleton>
          <h1
            className="scroll-m-20 opacity-0 flex md:justify-start items-start justify-center flex-col md:flex-row md:items-center gap-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Lorem ipsum dolor.
          </h1>
        </Skeleton>
        
        <div className="w-full flex grid-cols-3 grid-rows-3 md:grid-rows-1 gap-4 justify-center items-center grid">
          <Skeleton>
            <div className="h-32 w-20"></div>
          </Skeleton>
          <Skeleton>
            <div className="h-32 w-20"></div>
          </Skeleton>
          <Skeleton>
            <div className="h-32 w-20"></div>
          </Skeleton>

        </div>
        <Skeleton>
          <div className="w-full h-[400px]"></div>
        </Skeleton>
      </div>
    </div>
  )
}