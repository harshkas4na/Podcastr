// "use client";
// import PodcastCard from '@/components/ui/PodcastCard'
// import { Button } from '@/components/ui/button'
// import { podcastData } from '@/constants'
// import React from 'react'
// import { useQuery } from "convex/react";
// import { api } from "@/convex/_generated/api";

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// import { Calendar } from "@/components/ui/calendar"






// const Home = () => {
//   const tasks = useQuery(api.tasks.get);
//   const [date, setDate] = React.useState<Date | undefined>(new Date())
//   return (
//     <div className='mt-9 flex flex-col gap-9'>
//       <section className='flex flex-col gap-5'>
//           <h1 className='text-20 font-bold text-white-1'>Trending Podcasts</h1>
//           <Popover>
//             <PopoverTrigger>Open</PopoverTrigger>
//             <PopoverContent>Place content for the popover here.</PopoverContent>
//           </Popover>
//           <Calendar
//             mode="single"
//             selected={date}
//             onSelect={setDate}
//             className="rounded-md border"
//           />

//           <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
//             {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
//           </div>
//           <div className='podcast_grid'>

//           {podcastData.map(({id,description,title,imgURL})=>(
//             <PodcastCard
//             key={id}
//             title={title}
//             description={description}
//             imgUrl={imgURL}
//             podcastId={id}
//             />
//           ))}
//           </div>
//       </section>

//     </div>
//   )
// }

// export default Home

"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
