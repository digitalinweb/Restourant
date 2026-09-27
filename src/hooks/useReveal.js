import { useEffect, useRef, useState } from 'react'

const noObserver = () => typeof IntersectionObserver === 'undefined'

export function useReveal(threshold = 0.18) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(noObserver)

  useEffect(() => {
    const node = ref.current
    if (!node || visible || noObserver()) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, visible])

  return [ref, visible]
}

export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > offset,
  )

  useEffect(() => {
    if (scrolled) return undefined
    const onScroll = () => {
      if (window.scrollY > offset) setScrolled(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset, scrolled])

  return scrolled
}

export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [locked])
}
