import { location } from '../data/location.js'
import { useReveal } from '../hooks/useReveal.js'
import { SectionHeading } from './SectionHeading.jsx'
import { ArrowRight, CheckCircle, Clock, MapPin, Truck, Utensils } from './icons.jsx'

const serviceIcons = [Utensils, CheckCircle, Truck, MapPin]

export default function LocationHours() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} id="contact" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-80 w-80 rounded-blob bg-blob-mint/50 blur-3xl" />

      <div className="section-wrap">
        <SectionHeading
          eyebrow={location.eyebrow}
          title={location.titleLead}
          accent={location.titleAccent}
          description={location.description}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
          <div
            className={`flex flex-col gap-6 transition-all duration-700 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-card-lg">
              <iframe
                title="Map of Caterly, 128 Willow Street, San Francisco"
                src={location.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 sm:h-80"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-ink-200/70 bg-white p-6 shadow-card">
                <div className="flex items-center gap-2 text-primary-600">
                  <MapPin className="h-5 w-5" />
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                    Address
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {location.address.line1}
                  <br />
                  {location.address.line2}
                </p>
                <a
                  href="#reservation"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition hover:gap-3"
                >
                  {location.address.directions}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-[2rem] border border-ink-200/70 bg-ink-800 p-6 text-white shadow-card">
                <div className="flex items-center gap-2 text-primary-300">
                  <Clock className="h-5 w-5" />
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                    {location.todayNote}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {location.hours.map((row) => (
                    <li
                      key={row.day}
                      className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-2.5 text-xs last:border-b-0 last:pb-0"
                    >
                      <span className={row.open ? 'text-ink-200' : 'text-ink-400'}>
                        {row.day}
                      </span>
                      <span
                        className={`shrink-0 font-semibold ${
                          row.open ? 'text-white' : 'text-primary-300'
                        }`}
                      >
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col gap-6 transition-all duration-700 delay-100 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-card-lg">
              <img
                src={location.image}
                alt="Caterly dining room"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {location.services.map((service, i) => {
                const Icon = serviceIcons[i] ?? CheckCircle
                return (
                  <li
                    key={service.label}
                    className="flex items-center gap-3 rounded-2xl border border-ink-200/70 bg-white px-5 py-4 shadow-card transition hover:border-primary-300"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blob-peach text-primary-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-ink-800">
                        {service.label}
                      </span>
                      <span className="block text-[11px] text-ink-400">{service.value}</span>
                    </span>
                  </li>
                )
              })}
            </ul>

            <div className="flex flex-col items-center justify-between gap-5 rounded-[2rem] bg-gradient-blob px-7 py-7 sm:flex-row">
              <div>
                <h3 className="font-serif text-xl font-semibold text-ink-800">
                  Save your spot
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  Walk-ins welcome at the counter until 9pm.
                </p>
              </div>
              <a href={location.cta.href} className="btn-primary shrink-0">
                {location.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
