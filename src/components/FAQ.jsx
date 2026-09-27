import { useState } from 'react'
import { faq } from '../data/faq.js'
import { useReveal } from '../hooks/useReveal.js'
import { SectionHeading } from './SectionHeading.jsx'
import { Plus } from './icons.jsx'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div
            className={`transition-all duration-700 ${
              visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <SectionHeading
              align="left"
              eyebrow={faq.eyebrow}
              title={faq.titleLead}
              accent={faq.titleAccent}
              description={faq.description}
            />

            <div className="relative mt-10 max-w-sm">
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full rounded-blob bg-blob-blue/70" />
              <img
                src={faq.mascot}
                alt={faq.mascotCaption}
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-[2.5rem] border-4 border-white object-cover shadow-card-lg"
              />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-pill bg-ink-800 px-5 py-2.5 shadow-card">
                <p className="text-xs font-semibold text-white">{faq.mascotCaption}</p>
              </div>
            </div>

            <a href={faq.contactCta.href} className="btn-secondary mt-12">
              {faq.contactCta.label}
            </a>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <ul className="space-y-3">
              {faq.items.map((item, i) => {
                const isOpen = openIndex === i
                return (
                  <li
                    key={item.q}
                    className={`overflow-hidden rounded-[1.5rem] border transition-all duration-300 ${
                      isOpen
                        ? 'border-primary-200 bg-cream shadow-card'
                        : 'border-ink-200/70 bg-white hover:border-primary-200'
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                      >
                        <span className="flex items-start gap-4">
                          <span
                            className={`mt-0.5 font-serif text-sm font-semibold ${
                              isOpen ? 'text-primary-500' : 'text-ink-300'
                            }`}
                          >
                            0{i + 1}
                          </span>
                          <span
                            className={`font-serif text-base font-semibold sm:text-lg ${
                              isOpen ? 'text-ink-800' : 'text-ink-700'
                            }`}
                          >
                            {item.q}
                          </span>
                        </span>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-pill transition ${
                            isOpen
                              ? 'bg-primary-500 text-white'
                              : 'bg-cream text-ink-500'
                          }`}
                        >
                          <Plus open={isOpen} className="h-4 w-4" />
                        </span>
                      </button>
                    </h3>
                    <div
                      className={`grid transition-all duration-400 ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 pl-[4.25rem] text-sm leading-relaxed text-ink-500">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
