use client"

import { useState, useEffect } from "react"

export default function BrainwaveVisualizer() {
  const [waveHeight, setWaveHeight] = useState(Array(5).fill(10))

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveHeight(waveHeight.map(() => Math.random() * 20 + 5))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center space-x-1">
      {waveHeight.map((height, index) => (
        <div
          key={index}
          className="w-1 bg-purple-400 rounded-full transition-all duration-500 ease-in-out"
          style={{ height: `${height}px` }}
        ></div>
      ))}
    </div>
  )
}

