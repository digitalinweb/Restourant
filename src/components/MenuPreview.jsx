import { useState } from 'react'
import { menuCategories, menuCta } from '../data/menu.js'
import { useReveal } from '../hooks/useReveal.js'
import { SectionHeading } from './SectionHeading.jsx'
import { ArrowRight, Plus, Utensils } from './icons.jsx'

function MenuItem({ item }) {
  return (
    <li className="group flex gap-4 border-b border-ink-200/70 py-5 last:border-b-0">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-blob-peach/50 sm:h-28 sm:w-28">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-serif text-lg font-semibold text-ink-800">{item.name}</h4>
          <span className="shrink-0 font-serif text-lg font-semibold text-primary-600">
            ${item.price}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{item.description}</p>
        {item.tags.length > 0 ? (
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-pill border border-primary-200 bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  )
}

export default function MenuPreview() {
  const [active, setActive] = useState(menuCategories[0].id)
  const [ref, visible] = useReveal()
  const category = menuCategories.find((c) => c.id === active) ?? menuCategories[0]

  return (
    <section ref={ref} id="menu" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-20 top-24 -z-10 h-72 w-72 rounded-blob bg-blob-pink/40 blur-3xl" />

      <div className="section-wrap">
        <SectionHeading
          eyebrow="Menu Andalan · Signature"
          title="Pick a course, we will"
          accent="handle the rest"
          description="Menus andalan kami — everything cooked the morning it is served. Prices shown per guest, service and rentals available."
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {menuCategories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              aria-pressed={active === item.id}
              className={`rounded-pill px-6 py-3 text-sm font-semibold transition ${
                active === item.id
                  ? 'bg-primary-500 text-white shadow-pill'
                  : 'border border-ink-200 bg-white text-ink-500 hover:border-primary-300 hover:text-primary-600'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div
          className={`mt-12 grid gap-8 rounded-[2.5rem] border border-ink-200/70 bg-white p-6 shadow-card-lg transition-all duration-700 sm:p-9 lg:grid-cols-[1.1fr_1.4fr] lg:gap-14 lg:p-12 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blob-butter text-primary-600">
              <Utensils className="h-7 w-7" />
            </span>
            <h3 className="mt-6 font-serif text-3xl font-semibold text-ink-800">
              {category.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">{category.description}</p>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] bg-blob-blue/50">
              <img
                key={category.id}
                src={category.items[0].image}
                alt={category.name}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <a href={menuCta.href} className="btn-secondary mt-8 w-full">
              {menuCta.label}
            </a>
            <p className="mt-3 text-center text-xs text-ink-400">{menuCta.note}</p>
          </div>

          <ul>
            {category.items.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {menuCategories.map((item) => (
            <a
              key={item.id}
              href="#reservation"
              onClick={() => setActive(item.id)}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-ink-200/70 bg-white px-5 py-4 text-sm font-semibold text-ink-800 transition hover:border-primary-300 hover:shadow-card"
            >
              {item.name}
              <Plus
                open={false}
                className="h-4 w-4 text-primary-500 transition group-hover:rotate-45"
              />
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-400">
          Looking for something custom?{' '}
          <a
            href="#reservation"
            className="font-semibold text-primary-600 underline-offset-4 hover:underline"
          >
            Request a tailored tasting menu
          </a>{' '}
          <ArrowRight className="inline h-3.5 w-3.5" />
        </p>
      </div>
    </section>
  )
}
