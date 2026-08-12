import { useEffect, useState } from 'react'

export function useCountUp(end: number, duration: number = 2000, startTrigger: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startTrigger) return

    let startTimestamp: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)

      // Ease out quad formula
      const easeOutProgress = 1 - (1 - progress) * (1 - progress)
      setCount(Math.floor(easeOutProgress * end))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrameId)
  }, [end, duration, startTrigger])

  return count
}
