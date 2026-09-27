import { brand, footerColumns, navLinks, socials } from '../data/site.js'
import {
  ArrowUpRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Utensils,
  XSocial,
  YouTube,
} from './icons.jsx'

const socialIconMap = {
  instagram: Instagram,
  facebook: Facebook,
  x: XSocial,
  youtube: YouTube,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink-800 pt-20 text-ink-200 lg:pt-24">
      <div className="pointer-events-none absolute -left-20 -top-10 h-72 w-72 rounded-blob bg-primary-500/15 blur-3xl" />

      <div className="section-wrap relative">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          <div>
            <a href="#home" className="flex items-center gap-2.5 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-primary-500">
                <Utensils className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-semibold tracking-tight">
                  {brand.name}
                </span>
                <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.28em] text-primary-200">
                  {brand.tagline}
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-300">
              Seasonal catering and a neighbourhood restaurant in the heart of the warehouse
              district. Cooking to order since 2013.
            </p>

            <ul className="mt-7 flex gap-2.5">
              {socials.map((social) => {
                const Icon = socialIconMap[social.icon] ?? Instagram
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-pill border border-white/15 text-ink-200 transition hover:border-primary-400 hover:bg-primary-500 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 text-sm text-ink-300 transition hover:text-primary-300"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 border-b border-white/10 py-12 lg:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Visit
              </p>
              <p className="mt-1.5 text-sm leading-relaxed">
                {brand.address.line1}
                <br />
                {brand.address.line2}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Hours
              </p>
              <p className="mt-1.5 text-sm leading-relaxed">
                Mon – Thu: 11:00 AM – 10:00 PM
                <br />
                Fri – Sat: 11:00 AM – 12:00 AM · Sun: 10:00 AM – 9:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Contact
              </p>
              <a
                href={brand.phoneHref}
                className="mt-1.5 block text-sm transition hover:text-primary-300"
              >
                {brand.phone}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="mt-1 flex items-center gap-1.5 text-sm transition hover:text-primary-300"
              >
                <Mail className="h-3.5 w-3.5" />
                {brand.email}
              </a>
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 border-b border-white/10 py-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            className="rounded-pill bg-primary-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-secondary-600"
          >
            Book Catering
          </a>
        </nav>

        <div className="flex flex-col items-center justify-between gap-3 py-7 text-center text-xs text-ink-400 sm:flex-row sm:text-left">
          <p>
            &copy; {year} {brand.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href="#" className="transition hover:text-ink-100">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-ink-100">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-ink-100">
              Allergen Guide
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
