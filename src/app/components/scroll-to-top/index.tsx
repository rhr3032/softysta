'use client'
import { useEffect, useMemo, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.pageYOffset > 300)
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0
      setProgress(Math.min(100, Math.max(0, Math.round(pct))))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const radius = 20
  const circumference = useMemo(() => 2 * Math.PI * radius, [])
  const dashOffset = useMemo(
    () => circumference - (progress / 100) * circumference,
    [circumference, progress]
  )

  return (
    <div className='fixed bottom-8 right-8 z-999'>
      <div className='flex items-center gap-2.5'>
        {isVisible && (
          <button
            onClick={scrollToTop}
            aria-label='Scroll to top'
            className='relative grid place-items-center h-12 w-12 cursor-pointer rounded-full border border-white/20 bg-white/10 dark:bg-black/40 text-white shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-105 active:scale-95'
          >
            <svg
              className='absolute inset-0 -rotate-90'
              width='48'
              height='48'
              viewBox='0 0 48 48'
              fill='none'
              aria-hidden='true'
            >
              <circle
                cx='24'
                cy='24'
                r={radius}
                stroke='currentColor'
                strokeWidth='3'
                className='text-white/15'
                fill='none'
              />
              <circle
                cx='24'
                cy='24'
                r={radius}
                stroke='currentColor'
                strokeWidth='3'
                className='text-purple_blue'
                fill='none'
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap='round'
              />
            </svg>
            <Icon
              icon='mdi:chevron-up'
              width='22'
              height='22'
              className='relative z-10 text-dark_black dark:text-white'
            />
            <span className='sr-only'>Scroll to top</span>
          </button>
        )}
      </div>
    </div>
  )
}
