import { whyChooseUs } from '../data/whyChooseUs.js'
import { useReveal } from '../hooks/useReveal.js'
import { SectionHeading } from './SectionHeading.jsx'
import { ArrowRight, ChickenIcon, ChiliIcon, KnifeIcon } from './icons.jsx'

const icons = { knife: KnifeIcon, chili: ChiliIcon, chicken: ChickenIcon }

export default function WhyChooseUs() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.titleLead}
          accent={whyChooseUs.titleAccent}
          description={whyChooseUs.description}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {whyChooseUs.items.map((item, i) => {
            const Icon = icons[item.icon] ?? KnifeIcon
            return (
              <article
                key={item.id}
                className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${item.tint} p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-lg lg:p-10 ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-white/80 text-primary-600 shadow-card transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-8 w-8" />
                </span>

                <span className="mt-6 block font-serif text-5xl font-semibold text-white/70">
                  0{i + 1}
                </span>

                <h3 className="mt-2 font-serif text-2xl font-semibold text-ink-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.text}</p>

                <a
                  href="#process"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition hover:gap-3"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
