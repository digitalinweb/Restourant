import { process as processData } from '../data/process.js'
import { useReveal } from '../hooks/useReveal.js'
import { SectionHeading } from './SectionHeading.jsx'
import StarRating from './StarRating.jsx'
import { ArrowRight, CheckCircle, ChefHat, Clock, Clipboard, Flame, Leaf, Truck } from './icons.jsx'

const stepIcons = { clipboard: Clipboard, check: CheckCircle, flame: Flame, truck: Truck }

export default function ProcessSection() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} id="process" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <span id="events" className="sr-only" aria-hidden="true" />
      <div className="section-wrap">
        <SectionHeading
          eyebrow={processData.eyebrow}
          title={processData.titleLead}
          accent={processData.titleAccent}
          description={processData.description}
        />

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {processData.collage.map((image, i) => (
                <figure
                  key={image.alt}
                  className={`overflow-hidden rounded-[2rem] border-4 border-white shadow-card-lg ${
                    i % 2 === 1 ? 'translate-y-8' : ''
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className={`w-full object-cover ${
                      i === 0 ? 'aspect-[3/4]' : 'aspect-square'
                    }`}
                  />
                </figure>
              ))}
            </div>

            <div className="absolute -left-2 top-10 flex items-center gap-2 rounded-pill border border-white bg-white/95 px-4 py-2.5 shadow-card backdrop-blur sm:-left-6">
              <Leaf className="h-4 w-4 text-accent-leaf" />
              <span className="text-xs font-semibold text-ink-800">
                {processData.achievements[0].label}
              </span>
            </div>

            <div className="absolute -right-2 bottom-20 flex items-center gap-2 rounded-pill border border-white bg-white/95 px-4 py-2.5 shadow-card backdrop-blur sm:-right-6">
              <Clock className="h-4 w-4 text-primary-500" />
              <span className="text-xs font-semibold text-ink-800">
                {processData.achievements[1].label}
              </span>
            </div>

            <div className="absolute right-2 top-4 overflow-hidden rounded-[2rem] border-4 border-white shadow-card-lg sm:-right-4">
              <img
                src={processData.ctaImage}
                alt="Chef Marcus Wellington"
                loading="lazy"
                className="h-44 w-32 object-cover"
              />
              <div className="bg-primary-500 px-4 py-2.5 text-center">
                <p className="font-serif text-sm font-semibold text-white">
                  Cook with Master Chefs
                </p>
              </div>
            </div>
          </div>

          <ol className="order-1 space-y-5 lg:order-2">
            {processData.steps.map((step, i) => {
              const Icon = stepIcons[step.icon] ?? Clipboard
              return (
                <li
                  key={step.id}
                  className={`group relative flex gap-5 rounded-[1.75rem] border border-ink-200/70 bg-cream p-6 transition-all duration-500 hover:border-primary-300 hover:bg-white hover:shadow-card ${
                    visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-card transition duration-300 group-hover:bg-primary-500 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-500">
                      Step {step.number}
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-semibold text-ink-800">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.text}</p>
                  </div>
                </li>
              )
            })}

            <li className="rounded-[1.75rem] border border-ink-200/70 bg-white p-6 shadow-card">
              <div className="flex gap-4">
                <img
                  src={processData.floatingTestimonial.avatar}
                  alt={processData.floatingTestimonial.name}
                  loading="lazy"
                  className="h-14 w-14 shrink-0 rounded-2xl object-cover"
                />
                <div className="min-w-0">
                  <StarRating
                    value={processData.floatingTestimonial.rating}
                    iconClass="h-3.5 w-3.5"
                  />
                  <p className="mt-2 text-sm italic leading-relaxed text-ink-600">
                    &ldquo;{processData.floatingTestimonial.quote}&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-semibold text-ink-800">
                    {processData.floatingTestimonial.name}
                    <span className="font-normal text-ink-400">
                      {' '}
                      · {processData.floatingTestimonial.role}
                    </span>
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[2.5rem] bg-ink-800 px-7 py-9 text-center sm:flex-row sm:px-12 sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-500 text-white">
              <ChefHat className="h-6 w-6" />
            </span>
            <p className="font-serif text-xl font-semibold text-white sm:text-2xl">
              {processData.cta.label}
            </p>
          </div>
          <a href="#reservation" className="btn-inverse shrink-0">
            {processData.cta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
