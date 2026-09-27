import { useEffect, useRef, useState } from 'react'
import { promoItems } from '../data/menu.js'
import { useReveal } from '../hooks/useReveal.js'
import { Eyebrow } from './SectionHeading.jsx'
import StarRating from './StarRating.jsx'
import { ArrowRight, Clock, Flame } from './icons.jsx'

function PromoCard({ item, index }) {
  return (
    <article
      className="group relative overflow-hidden rounded-[2rem] border border-ink-200/70 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-lg"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="relative mx-4 mt-4 overflow-hidden rounded-[1.5rem] bg-blob-peach/60">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-pill bg-ink-800 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-card">
          {item.badge}
        </span>
        <button
          type="button"
          aria-label={`Add ${item.name} to order`}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-pill bg-primary-500 text-white opacity-0 shadow-pill transition-all duration-300 hover:bg-secondary-600 group-hover:opacity-100"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-ink-800">{item.name}</h3>

        <div className="mt-2.5 flex items-center justify-between gap-3">
          <StarRating value={item.rating} count={item.reviews} />
          <div className="flex items-baseline gap-2">
            {item.oldPrice ? (
              <span className="text-sm text-ink-300 line-through">${item.oldPrice}</span>
            ) : null}
            <span className="font-serif text-2xl font-semibold text-primary-600">
              ${item.price}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 border-t border-ink-200/70 pt-4 text-xs text-ink-400">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary-500" />
            {item.cookTime}
          </span>
          <span className="flex items-center gap-1.5">
            <Flame className="h-3.5 w-3.5 text-primary-500" />
            {item.calories}
          </span>
        </div>
      </div>
    </article>
  )
}

export default function MenuHighlight() {
  const [ref, visible] = useReveal()
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    if (!visible) return undefined
    timer.current = window.setInterval(() => {
      setIndex((v) => (v + 1) % promoItems.length)
    }, 5000)
    return () => window.clearInterval(timer.current)
  }, [visible])

  return (
    <section ref={ref} id="services" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="section-wrap">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Promo Aktif · Limited Time</Eyebrow>
            <h2 className="mt-5 text-display-sm font-semibold text-ink-800 sm:text-display-md">
              This week&rsquo;s <span className="italic text-primary-500">best sellers</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              Rotating weekly offers on our most-ordered dishes. Available for dine-in, pickup
              and delivery while supplies last.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {promoItems.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${item.name}`}
                  aria-current={i === index}
                  className={`h-2 rounded-pill transition-all duration-300 ${
                    i === index ? 'w-8 bg-primary-500' : 'w-2 bg-ink-200 hover:bg-ink-300'
                  }`}
                />
              ))}
            </div>
            <a href="#menu" className="btn-secondary shrink-0 px-6 py-3">
              Full Menu
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {promoItems.map((item, i) => (
            <PromoCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
