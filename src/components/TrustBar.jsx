import { trust } from '../data/trust.js'
import { useReveal } from '../hooks/useReveal.js'
import { ChefHat, CheckCircle, Star, Trophy } from './icons.jsx'

export default function TrustBar() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} className="border-y border-ink-200/70 bg-white/60 py-14 lg:py-16">
      <div className="section-wrap">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-400">
          {trust.label}
        </p>

        <div className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
          {trust.press.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center gap-1 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-pill bg-ink-800 font-serif text-sm font-semibold text-white transition duration-300 group-hover:bg-primary-500">
                {item.mark}
              </span>
              <span className="text-xs font-medium text-ink-400 transition group-hover:text-ink-800">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 border-t border-ink-200/70 pt-12 lg:grid-cols-3">
          {trust.awards.map((award) => (
            <div
              key={award.title}
              className="flex items-start gap-4 rounded-3xl border border-ink-200/70 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary-200"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blob-butter text-accent-gold">
                <Trophy className="h-6 w-6" />
              </span>
              <div>
                <p className="font-serif text-lg font-semibold text-ink-800">
                  {award.title}
                </p>
                <p className="mt-1 text-xs text-ink-400">
                  {award.year} · {award.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <dl
          className={`mt-12 grid grid-cols-1 gap-6 rounded-[2rem] bg-ink-800 px-6 py-9 text-center transition-all duration-700 sm:grid-cols-3 lg:px-12 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {trust.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <dt className="flex items-center gap-2 font-serif text-3xl font-semibold text-white sm:text-4xl">
                <Star className="h-5 w-5 text-primary-400" />
                {stat.value}
              </dt>
              <dd className="mt-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-ink-300">
                <CheckCircle className="h-3.5 w-3.5 text-primary-400" />
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-ink-400">
          <ChefHat className="h-4 w-4 text-primary-500" />
          Certified by the Bay Area Sustainable Kitchen Association
        </p>
      </div>
    </section>
  )
}
