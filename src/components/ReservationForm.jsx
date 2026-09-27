import { useState } from 'react'
import { reservation } from '../data/reservation.js'
import { useReveal } from '../hooks/useReveal.js'
import { SectionHeading } from './SectionHeading.jsx'
import { CheckCircle, ChevronDown, Clock, Mail, MapPin, Phone, User } from './icons.jsx'

const fieldClass =
  'w-full rounded-2xl border border-ink-200 bg-cream px-4 py-3.5 text-sm text-ink-800 placeholder:text-ink-300 transition focus:border-primary-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-200'

export default function ReservationForm() {
  const [form, setForm] = useState(reservation.defaults)
  const [submitted, setSubmitted] = useState(false)
  const [ref, visible] = useReveal()

  const update = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const inputClass = fieldClass

  return (
    <section
      ref={ref}
      id="reservation"
      className="relative overflow-hidden bg-ink-800 py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-ink opacity-70" />
      <div className="pointer-events-none absolute -left-24 top-0 -z-0 h-80 w-80 rounded-blob bg-primary-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 -z-0 h-80 w-80 rounded-blob bg-blob-blue/20 blur-3xl" />

      <div className="section-wrap relative">
        <SectionHeading
          tone="dark"
          eyebrow={reservation.eyebrow}
          title={reservation.titleLead}
          accent={reservation.titleAccent}
          description={reservation.description}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          <div
            className={`rounded-[2.5rem] bg-white p-6 shadow-card-lg transition-all duration-700 sm:p-9 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {submitted ? (
              <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-pill bg-blob-mint text-accent-leaf">
                  <CheckCircle className="h-10 w-10" />
                </span>
                <h3 className="mt-7 font-serif text-3xl font-semibold text-ink-800">
                  {reservation.successTitle}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500">
                  {reservation.successText}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setForm(reservation.defaults)
                  }}
                  className="btn-secondary mt-8"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <fieldset>
                  <legend className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                    What are you planning?
                  </legend>
                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {reservation.eventTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 text-sm font-medium transition ${
                          form.eventType === type.value
                            ? 'border-primary-400 bg-primary-50 text-primary-700'
                            : 'border-ink-200 bg-cream text-ink-600 hover:border-primary-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="eventType"
                          value={type.value}
                          checked={form.eventType === type.value}
                          onChange={update('eventType')}
                          className="h-4 w-4 accent-primary-500"
                        />
                        {type.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-xs font-semibold text-ink-600">
                      {reservation.fields.name}
                    </span>
                    <span className="relative block">
                      <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Maria Rodriguez"
                        className={`${inputClass} pl-11`}
                      />
                    </span>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold text-ink-600">
                      {reservation.fields.email}
                    </span>
                    <span className="relative block">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="maria@company.com"
                        className={`${inputClass} pl-11`}
                      />
                    </span>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold text-ink-600">
                      {reservation.fields.phone}
                    </span>
                    <span className="relative block">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300" />
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+1 (415) 000-0000"
                        className={`${inputClass} pl-11`}
                      />
                    </span>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold text-ink-600">
                      {reservation.fields.date}
                    </span>
                    <input
                      required
                      type="date"
                      value={form.date}
                      onChange={update('date')}
                      className={inputClass}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold text-ink-600">
                      {reservation.fields.guests}
                    </span>
                    <span className="relative block">
                      <select
                        value={form.guests}
                        onChange={update('guests')}
                        className={`${inputClass} appearance-none pr-11`}
                      >
                        {['2', '10', '20', '40', '80', '150', '300', '500+'].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === '1' ? 'guest' : 'guests'}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                    </span>
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-xs font-semibold text-ink-600">
                      {reservation.fields.notes}
                    </span>
                    <textarea
                      rows={4}
                      value={form.notes}
                      onChange={update('notes')}
                      placeholder="20-40 guests · gluten free · venue loads in via side entrance…"
                      className={`${inputClass} resize-none`}
                    />
                  </label>
                </div>

                <fieldset className="mt-6">
                  <legend className="flex items-center gap-1.5 text-xs font-semibold text-ink-600">
                    <Clock className="h-3.5 w-3.5 text-primary-500" />
                    Preferred time
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {reservation.timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, slot }))}
                        className={`rounded-pill border px-4 py-2 text-xs font-semibold transition ${
                          form.slot === slot
                            ? 'border-primary-400 bg-primary-500 text-white'
                            : 'border-ink-200 bg-cream text-ink-600 hover:border-primary-300'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <button type="submit" className="btn-primary mt-8 w-full py-4">
                  {reservation.submitLabel}
                </button>

                <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                  {reservation.trustNotes.map((note) => (
                    <li key={note} className="flex items-start gap-1.5 text-[11px] text-ink-400">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-500" />
                      {note}
                    </li>
                  ))}
                </ul>
              </form>
            )}
          </div>

          <aside
            className={`flex flex-col gap-5 transition-all duration-700 delay-100 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
              <h3 className="font-serif text-2xl font-semibold text-white">
                Prefer to talk it through?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-200">
                Our events team is available Monday to Saturday, 9am to 6pm. Average reply
                time: under 1 business day.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+14158024477"
                    className="flex items-center gap-3 text-ink-100 transition hover:text-primary-300"
                  >
                    <Phone className="h-4 w-4 text-primary-400" />
                    +1 (415) 802-4477
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@caterly.co"
                    className="flex items-center gap-3 text-ink-100 transition hover:text-primary-300"
                  >
                    <Mail className="h-4 w-4 text-primary-400" />
                    hello@caterly.co
                  </a>
                </li>
                <li className="flex items-start gap-3 text-ink-100">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                  128 Willow Street, Warehouse District
                  <br />
                  San Francisco, CA 94107
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <iframe
                title="Caterly location map"
                src="https://www.google.com/maps?q=128+Willow+Street+San+Francisco+CA&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>

            <div className="rounded-[2rem] bg-primary-500 p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-100">
                {reservation.guestRange}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-white">
                Group of {reservation.guestRange.split('–')[0]} or more?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-50">
                Get a complimentary tasting session and a custom seasonal menu drafted by
                Marcus.
              </p>
              <a
                href="#newsletter"
                className="btn mt-6 w-full bg-white text-primary-700 hover:bg-ink-800 hover:text-white"
              >
                Request a Tasting
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
