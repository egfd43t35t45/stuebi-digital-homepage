"use client"

import { useState } from "react"
import { Smile, Meh, Frown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const moods = [
  { icon: Smile, label: "Gut", color: "text-green-400" },
  { icon: Meh, label: "Neutral", color: "text-yellow-400" },
  { icon: Frown, label: "Schlecht", color: "text-red-400" },
]

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState(1)

  return (
    <div className="flex space-x-2">
      {moods.map((mood, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`${selectedMood === index ? mood.color : "text-gray-400"}`}
                onClick={() => setSelectedMood(index)}
              >
                <mood.icon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{mood.label}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}

