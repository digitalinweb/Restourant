import { hero } from '../data/hero.js'
import { brand } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'
import { Eyebrow } from './SectionHeading.jsx'
import StarRating from './StarRating.jsx'
import { ArrowRight, CheckCircle, Leaf, Star } from './icons.jsx'

export default function Hero() {
  const [ref, visible] = useReveal(0.05)

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-cream pb-24 pt-28 lg:pb-32 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-blob opacity-70" />
      <div className="pointer-events-none absolute -left-24 top-32 -z-10 h-72 w-72 rounded-blob bg-blob-pink/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-80 w-80 rounded-blob bg-blob-blue/60 blur-3xl" />

      <div className="section-wrap">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`flex justify-center transition-all duration-700 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </div>

          <h1
            className={`mt-6 text-display-sm font-semibold text-ink-800 transition-all duration-700 delay-100 sm:text-display-md lg:text-display-lg ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            {hero.titleLead}{' '}
            <span className="relative inline-block italic text-primary-500">
              {hero.titleAccent}
              <svg
                viewBox="0 0 300 20"
                className="absolute -bottom-2 left-0 h-3 w-full text-primary-200"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 14C60 5 120 4 180 8s80 7 117 2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            className={`mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-500 transition-all duration-700 delay-200 sm:text-lg ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            {hero.description}
          </p>

          <div
            className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-300 sm:flex-row ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <a href={hero.primaryCta.href} className="btn-primary w-full sm:w-auto">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary w-full sm:w-auto">
              {hero.secondaryCta.label}
            </a>
          </div>

          <div
            className={`mt-12 flex flex-col items-center justify-center gap-6 transition-all duration-700 delay-400 sm:flex-row sm:gap-10 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <StarRating value={4.9} count="2,400+" />
            </div>
            <span className="hidden h-6 w-px bg-ink-200 sm:block" />
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-ink-500">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary-500" />
                Licensed &amp; insured
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary-500" />
                Farm to table
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-pill bg-blob-peach/70 blur-3xl" />

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {hero.images.map((src, i) => (
              <figure
                key={src}
                className={`group relative overflow-hidden rounded-[2rem] border-4 border-white bg-surface shadow-card-lg transition-all duration-500 hover:-translate-y-2 ${
                  i % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'
                } ${i === 0 ? 'mt-0 lg:mt-8' : ''} ${i === 3 ? 'mb-0 lg:mb-8' : ''}`}
              >
                <img
                  src={src}
                  alt={`Caterly signature dish ${i + 1}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink-800/10 transition duration-500 group-hover:bg-ink-800/0" />
              </figure>
            ))}
          </div>

          <div className="pointer-events-none absolute -left-4 top-6 hidden animate-floaty rounded-pill border border-white bg-white/90 px-4 py-3 shadow-card backdrop-blur lg:flex">
            <Leaf className="h-5 w-5 text-accent-leaf" />
            <span className="ml-2 text-xs font-semibold text-ink-800">
              11 local farms
            </span>
          </div>

          <div className="pointer-events-none absolute -right-2 bottom-10 hidden animate-floaty rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-card backdrop-blur sm:block lg:-right-6">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-accent-gold" />
              <span className="font-serif text-lg font-semibold text-ink-800">
                {hero.floatingBadge.rating}
              </span>
            </div>
            <p className="mt-0.5 text-[11px] text-ink-400">
              {hero.floatingBadge.label}
            </p>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-4 border-t border-ink-200 pt-10 lg:mt-24">
          {hero.highlights.map((item) => (
            <div key={item.label} className="text-center">
              <dt className="font-serif text-3xl font-semibold text-primary-500 sm:text-4xl">
                {item.value}
              </dt>
              <dd className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-400 sm:text-xs">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-center text-sm text-ink-400">
          Prefer to talk it through?{' '}
          <a
            href={brand.phoneHref}
            className="font-semibold text-primary-600 underline-offset-4 hover:underline"
          >
            Call {brand.phone}
          </a>
        </p>
      </div>
    </section>
  )
}
