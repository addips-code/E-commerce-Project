import { Skeleton } from "@/components/ui/skeleton"

function loading() {
  return (
    <div className="p-10">
        <h1 className="text-3xl font-bold mb-2">Fetching Results</h1>
        <h2 className="mb-5 text-gray-400">won't be long...</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-3 xl:grid-cols-4 gap-2">
            <Skeleton className="w-[300px] h-[400px]" />
            <Skeleton className="w-[300px] h-[400px]" />
            <Skeleton className="w-[300px] h-[400px]" />
            <Skeleton className="w-[300px] h-[400px]" />
            <Skeleton className="w-[300px] h-[400px]" />
            <Skeleton className="w-[300px] h-[400px]" />
            <Skeleton className="w-[300px] h-[400px]" />
            <Skeleton className="w-[300px] h-[400px]" />
        </div>
    </div>
  )
}

export default loading;