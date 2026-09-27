import { useState } from 'react'
import { newsletter } from '../data/delivery.js'
import { useReveal } from '../hooks/useReveal.js'
import { ArrowRight, CheckCircle, Leaf, Mail, Quote } from './icons.jsx'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [ref, visible] = useReveal()

  const onSubmit = (event) => {
    event.preventDefault()
    if (!email) return
    setDone(true)
  }

  return (
    <section ref={ref} id="newsletter" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="section-wrap">
        <div
          className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-blob px-6 py-14 transition-all duration-700 sm:px-10 lg:px-16 lg:py-20 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                {newsletter.eyebrow}
              </span>

              <h2 className="mt-6 text-display-sm font-semibold text-ink-800 sm:text-display-md">
                {newsletter.titleLead}{' '}
                <span className="italic text-primary-600">{newsletter.titleAccent}</span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-500">
                {newsletter.description}
              </p>

              {done ? (
                <div className="mt-9 flex items-start gap-4 rounded-2xl border border-accent-leaf/30 bg-white/80 p-6 backdrop-blur">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-blob-mint text-accent-leaf">
                    <CheckCircle className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-ink-800">
                      {newsletter.successTitle}
                    </h3>
                    <p className="mt-1 text-sm text-ink-500">{newsletter.successText}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-9 max-w-lg">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label className="relative flex-1">
                      <span className="sr-only">{newsletter.field}</span>
                      <Mail className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={newsletter.field}
                        className="w-full rounded-pill border border-white bg-white/90 py-4 pr-5 text-sm text-ink-800 shadow-card backdrop-blur transition placeholder:text-ink-300 focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200"
                        style={{ paddingLeft: '3.25rem' }}
                      />                    </label>
                    <button type="submit" className="btn-primary shrink-0 px-8">
                      {newsletter.cta}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-4 text-[11px] text-ink-400">{newsletter.privacy}</p>
                </form>
              )}

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {newsletter.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-xs font-medium text-ink-500">
                    <CheckCircle className="h-3.5 w-3.5 text-primary-500" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <figure className="relative">
              <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-blob bg-blob-pink" />
              <img
                src={newsletter.image}
                alt="A seasonal Caterly bowl"
                loading="lazy"
                className="relative aspect-square w-full rounded-[2.5rem] border-4 border-white object-cover shadow-card-lg"
              />
              <figcaption className="absolute -bottom-6 left-6 max-w-[15rem] rounded-2xl border border-white bg-white/95 p-4 shadow-card backdrop-blur">
                <Quote className="h-4 w-4 text-primary-300" />
                <p className="mt-1.5 font-serif text-sm italic leading-snug text-ink-800">
                  &ldquo;{newsletter.perks[1]}&rdquo;
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-ink-400">
                  <Leaf className="h-3 w-3 text-accent-leaf" />
                  Subscribers only
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
