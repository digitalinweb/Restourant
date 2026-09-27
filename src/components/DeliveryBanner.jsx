import { delivery } from '../data/delivery.js'
import { useReveal } from '../hooks/useReveal.js'
import { ArrowRight, Clock, Star, Truck } from './icons.jsx'

export default function DeliveryBanner() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} id="order" className="relative bg-ink-800 py-20 lg:py-28">
      <div className="section-wrap">
        <div
          className={`relative overflow-hidden rounded-[2.5rem] bg-ink-900 px-6 py-14 shadow-card-lg transition-all duration-700 sm:px-10 lg:px-16 lg:py-20 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={delivery.images[0]}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/90 to-ink-900/40" />

          <img
            src={delivery.images[1]}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute -right-16 -top-10 hidden h-72 w-72 rounded-pill object-cover opacity-25 blur-[2px] lg:block"
          />

          <div className="relative z-10 max-w-2xl">
            <span className="eyebrow border-white/25 bg-white/10 text-primary-200">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              {delivery.eyebrow}
            </span>

            <h2 className="mt-6 text-display-sm font-semibold text-white sm:text-display-md">
              {delivery.titleLead}{' '}
              <span className="italic text-primary-400">{delivery.titleAccent}</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-200">
              {delivery.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={delivery.cta.href} className="btn-primary">
                {delivery.cta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={delivery.secondaryCta.href}
                className="btn border border-white/25 text-white hover:border-white hover:bg-white hover:text-ink-900"
              >
                {delivery.secondaryCta.label}
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {delivery.platforms.map((platform) => (
                <li
                  key={platform.name}
                  className="flex items-center gap-2 rounded-pill border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-ink-100 backdrop-blur"
                >
                  <Truck className="h-3.5 w-3.5 text-primary-400" />
                  <span className="font-semibold">{platform.name}</span>
                  <span className="text-ink-300">{platform.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 mt-12 max-w-sm rounded-[2rem] border border-white/15 bg-white/10 p-4 backdrop-blur-md lg:absolute lg:bottom-14 lg:right-14 lg:mt-0 lg:w-80">
            <div className="flex items-center gap-4">
              <img
                src={delivery.badge.image}
                alt={delivery.badge.name}
                loading="lazy"
                className="h-20 w-20 shrink-0 rounded-2xl object-cover"
              />
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-300">
                  Special of the day
                </p>
                <p className="mt-1 truncate font-serif text-lg font-semibold text-white">
                  {delivery.badge.name}
                </p>
                <p className="text-xs text-ink-200">{delivery.badge.detail}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="font-serif text-base font-semibold text-primary-300">
                    {delivery.badge.price}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-ink-200">
                    <Star className="h-3 w-3 text-accent-gold" />
                    4.9
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-ink-300">
                    <Clock className="h-3 w-3" />
                    25 min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
