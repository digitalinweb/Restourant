import { testimonials } from '../data/testimonials.js'
import { useReveal } from '../hooks/useReveal.js'
import { SectionHeading } from './SectionHeading.jsx'
import StarRating from './StarRating.jsx'
import { Quote, Star } from './icons.jsx'

export default function Testimonials() {
  const [ref, visible] = useReveal()
  const { summary, items } = testimonials

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.titleLead}
          accent={testimonials.titleAccent}
          description={testimonials.description}
        />

        <div className="mt-14 flex flex-col items-center justify-center gap-6 rounded-[2rem] border border-ink-200/70 bg-cream px-6 py-7 sm:flex-row sm:gap-10">
          <div className="flex items-center gap-5">
            <span className="font-serif text-5xl font-semibold text-primary-500">
              {summary.rating}
            </span>
            <div>
              <div className="flex items-center gap-1 text-accent-gold">
                {[1, 2, 3, 4, 5].map((step) => (
                  <Star key={step} filled={summary.rating >= step} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-1 text-xs font-medium text-ink-500">
                {summary.rating} / {summary.outOf} · {summary.count}
              </p>
            </div>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:border-l sm:border-ink-200 sm:pl-10">
            {summary.highlights.map((item) => (
              <li key={item.label} className="text-center">
                <p className="font-serif text-xl font-semibold text-ink-800">{item.value}</p>
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-400">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item, i) => (
            <figure
              key={item.name}
              className={`group relative flex flex-col rounded-[2rem] border border-ink-200/70 bg-cream p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-card-lg ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              <Quote className="h-7 w-7 text-primary-200 transition group-hover:text-primary-400" />

              <StarRating
                value={item.rating}
                iconClass="h-4 w-4"
                className="mt-4"
              />

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-200/70 pt-5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-pill object-cover"
                />
                <span>
                  <span className="block text-sm font-semibold text-ink-800">{item.name}</span>
                  <span className="block text-[11px] text-ink-400">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
