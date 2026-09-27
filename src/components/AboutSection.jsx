import { story } from '../data/about.js'
import { useReveal } from '../hooks/useReveal.js'
import { SectionHeading } from './SectionHeading.jsx'
import { ArrowRight, CheckCircle, Leaf } from './icons.jsx'

export default function AboutSection() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} id="about" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-24 top-20 -z-10 h-80 w-80 rounded-blob bg-blob-lilac/50 blur-3xl" />

      <div className="section-wrap">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div
            className={`relative transition-all duration-700 ${
              visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <div className="pointer-events-none absolute -left-6 -top-6 -z-10 h-full w-full rounded-[3rem] bg-blob-peach" />
            <img
              src={story.image}
              alt="The Caterly dining room"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[3rem] border-4 border-white object-cover shadow-card-lg lg:aspect-[9/10]"
            />

            <div className="absolute -bottom-8 -right-2 w-48 overflow-hidden rounded-[2rem] border-4 border-white shadow-card-lg sm:right-6 lg:-right-10 lg:w-56">
              <img
                src={story.imageDetail}
                alt="Preparing the morning service"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="absolute -left-3 top-8 flex items-center gap-2 rounded-pill bg-white/95 px-4 py-2.5 shadow-card backdrop-blur lg:-left-8">
              <Leaf className="h-4 w-4 text-accent-leaf" />
              <span className="text-xs font-semibold text-ink-800">Since 2013</span>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${
              visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <SectionHeading
              align="left"
              eyebrow={story.eyebrow}
              title={story.titleLead}
              accent={story.titleAccent}
            />

            {story.paragraphs.map((text) => (
              <p key={text.slice(0, 24)} className="mt-6 text-base leading-relaxed text-ink-500">
                {text}
              </p>
            ))}

            <dl className="mt-9 grid grid-cols-3 gap-4 rounded-3xl border border-ink-200/70 bg-white p-5 shadow-card">
              {story.facts.map((fact) => (
                <div key={fact.label} className="border-l-2 border-primary-200 pl-3 first:border-l-0 first:pl-0">
                  <dt className="font-serif text-2xl font-semibold text-primary-600">
                    {fact.value}
                  </dt>
                  <dd className="mt-1 text-[11px] leading-snug text-ink-400">{fact.label}</dd>
                </div>
              ))}
            </dl>

            <a href={story.cta.href} className="btn-primary mt-9">
              {story.cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <ol className="mt-24 grid gap-6 border-t border-ink-200 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {story.timeline.map((entry, i) => (
            <li key={entry.year} className="relative">
              <span className="font-serif text-4xl font-semibold text-primary-200">
                {entry.year}
              </span>
              <span className="mt-3 flex items-center gap-2">
                <span className="h-1 w-1 rounded-pill bg-primary-500" />
                <h3 className="font-serif text-lg font-semibold text-ink-800">{entry.title}</h3>
              </span>
              <p className="mt-2.5 pl-3.5 text-sm leading-relaxed text-ink-500">
                {entry.text}
              </p>
              {i < story.timeline.length - 1 ? (
                <span className="absolute -right-3 top-14 hidden h-1.5 w-1.5 rounded-pill bg-ink-200 lg:block" />
              ) : null}
            </li>
          ))}
        </ol>

        <ul className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-[2rem] bg-ink-800 px-6 py-6 text-sm text-ink-100 lg:mt-20">
          {['Locally sourced', 'No preservatives', 'Cooked to order', 'Compostable packaging'].map(
            (item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-400" />
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}
