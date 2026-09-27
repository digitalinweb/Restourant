import { useState } from 'react'
import { gallery } from '../data/gallery.js'
import { useLockBodyScroll, useReveal } from '../hooks/useReveal.js'
import { SectionHeading } from './SectionHeading.jsx'
import { ArrowUpRight, Close, Instagram } from './icons.jsx'

export default function Gallery() {
  const [active, setActive] = useState(gallery.filterLabels[0])
  const [lightbox, setLightbox] = useState(null)
  const [ref, visible] = useReveal()

  useLockBodyScroll(lightbox !== null)

  const items = gallery.items.filter(
    (item) => active === gallery.filterLabels[0] || item.category === active,
  )

  const close = () => setLightbox(null)

  return (
    <section ref={ref} id="gallery" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="pointer-events-none absolute left-1/3 top-10 -z-10 h-72 w-72 rounded-blob bg-blob-mint/50 blur-3xl" />

      <div className="section-wrap">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.titleLead}
          accent={gallery.titleAccent}
          description={gallery.description}
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {gallery.filterLabels.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setActive(label)}
              aria-pressed={active === label}
              className={`rounded-pill px-5 py-2.5 text-sm font-semibold transition ${
                active === label
                  ? 'bg-ink-800 text-white shadow-card'
                  : 'border border-ink-200 bg-white text-ink-500 hover:border-primary-300 hover:text-primary-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightbox(item)}
              className={`group relative overflow-hidden rounded-[1.5rem] bg-blob-pink/50 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-lg ${
                visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-800/85 via-ink-800/10 to-transparent p-4 opacity-0 transition duration-400 group-hover:opacity-100">
                <span className="flex w-full items-center justify-between gap-2 text-left">
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-300">
                      {item.category}
                    </span>
                    <span className="mt-1 block text-xs font-medium leading-snug text-white">
                      {item.alt}
                    </span>
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-primary-500 text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-ink-200/70 bg-white px-7 py-7 shadow-card sm:flex-row lg:px-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blob-pink text-primary-600">
              <Instagram className="h-6 w-6" />
            </span>
            <div>
              <p className="font-serif text-lg font-semibold text-ink-800">
                850 events a year, documented daily
              </p>
              <p className="text-sm text-ink-400">#behindthecaterly</p>
            </div>
          </div>
          <a href={gallery.cta.href} className="btn-primary shrink-0">
            {gallery.cta.label}
          </a>
        </div>

        <div className="mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...gallery.strip, ...gallery.strip].map((src, i) => (
              <img
                key={`${src}-${i}`}
                src={src}
                alt="Behind the scenes at Caterly"
                loading="lazy"
                className="h-44 w-60 shrink-0 rounded-[1.5rem] object-cover shadow-card sm:h-56 sm:w-80"
              />
            ))}
          </div>
        </div>
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/90 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-pill bg-white/10 text-white transition hover:bg-primary-500"
          >
            <Close className="h-5 w-5" />
          </button>
          <figure
            className="max-h-full w-full max-w-3xl overflow-hidden rounded-[2rem] bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[70vh] w-full object-cover"
            />
            <figcaption className="flex items-center justify-between gap-4 px-6 py-5">
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-600">
                  {lightbox.category}
                </span>
                <span className="mt-1 block font-serif text-lg font-semibold text-ink-800">
                  {lightbox.alt}
                </span>
              </span>
              <a href="#reservation" className="btn-primary shrink-0 px-5 py-2.5">
                Book this menu
              </a>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  )
}
