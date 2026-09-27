import { chef } from '../data/chef.js'
import { useReveal } from '../hooks/useReveal.js'
import { SectionHeading } from './SectionHeading.jsx'
import StarRating from './StarRating.jsx'
import { ArrowRight, ChefHat, Quote, Star } from './icons.jsx'

export default function ChefSection() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} id="chef" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-28 bottom-10 -z-10 h-72 w-72 rounded-blob bg-blob-pink/40 blur-3xl" />

      <div className="section-wrap">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div
            className={`relative order-2 transition-all duration-700 lg:order-1 ${
              visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <div className="pointer-events-none absolute -bottom-6 -right-4 -z-10 h-4/5 w-3/4 rounded-[3rem] bg-blob-blue" />
            <img
              src={chef.image}
              alt={`${chef.name}, ${chef.role}`}
              loading="lazy"
              className="aspect-[5/6] w-full rounded-[3rem] border-4 border-white object-cover shadow-card-lg"
            />

            <div className="absolute left-4 top-6 flex items-center gap-2.5 rounded-2xl bg-ink-800 px-4 py-3 shadow-card-lg sm:left-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-primary-500">
                <Star className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">{chef.badge.label}</p>
                <p className="text-[10px] text-ink-300">{chef.badge.sub}</p>
              </div>
            </div>

            <div className="absolute -bottom-4 right-4 rounded-2xl border border-white bg-white/95 px-5 py-4 shadow-card backdrop-blur sm:right-8 lg:-right-8">
              <p className="font-script text-3xl leading-none text-primary-600">
                {chef.signature}
              </p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-ink-400">
                Hand-signed on every menu
              </p>
            </div>
          </div>

          <div
            className={`order-1 transition-all duration-700 delay-100 lg:order-2 ${
              visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <SectionHeading
              align="left"
              eyebrow={chef.eyebrow}
              title={chef.titleLead}
              accent={chef.titleAccent}
            />

            <figure className="mt-8 border-l-2 border-primary-300 pl-5">
              <Quote className="h-6 w-6 text-primary-300" />
              <blockquote className="mt-2 font-serif text-xl italic leading-relaxed text-ink-800">
                {chef.quote}
              </blockquote>
              <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                {chef.name} — {chef.role}
              </figcaption>
            </figure>

            {chef.bio.map((text) => (
              <p key={text.slice(0, 24)} className="mt-5 text-base leading-relaxed text-ink-500">
                {text}
              </p>
            ))}

            <dl className="mt-9 grid grid-cols-3 gap-3">
              {chef.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-cream px-4 py-5 text-center transition hover:bg-blob-peach/60"
                >
                  <dt className="font-serif text-2xl font-semibold text-primary-600 sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1.5 text-[10px] font-medium uppercase leading-snug tracking-[0.1em] text-ink-400">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={chef.cta.href} className="btn-primary">
                {chef.cta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <StarRating value={4.9} count="1,200+ chefs" className="sm:ml-2" />
            </div>

            <ul className="mt-10 flex items-center gap-4 border-t border-ink-200 pt-8">
              {chef.team.map((member) => (
                <li key={member.name} className="flex-1 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="mx-auto aspect-square w-full max-w-20 rounded-2xl border-2 border-white object-cover shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary-300"
                  />
                  <p className="mt-2 text-xs font-semibold text-ink-800">{member.name}</p>
                  <p className="text-[10px] text-ink-400">{member.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-5 rounded-[2rem] bg-cream px-6 py-8 text-center sm:flex-row sm:text-left lg:px-10">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-500 text-white">
              <ChefHat className="h-6 w-6" />
            </span>
            <p className="font-serif text-lg font-semibold text-ink-800 sm:text-xl">
              Want Marcus cooking at your next event?
            </p>
          </div>
          <a href="#reservation" className="btn-secondary shrink-0 px-6 py-3">
            Check Availability
          </a>
        </div>
      </div>
    </section>
  )
}
