import { useState } from 'react'
import { brand, navLinks } from '../data/site.js'
import { useLockBodyScroll, useScrolled } from '../hooks/useReveal.js'
import { Close, MenuBars, Phone, Search, Utensils } from './icons.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(20)
  useLockBodyScroll(open)

  return (
    <header
      id="home"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-800/95 shadow-card backdrop-blur-md'
          : 'bg-ink-800 lg:bg-transparent lg:backdrop-blur-0'
      }`}
    >
      <div className="section-wrap">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16 lg:h-[72px]' : 'h-20 lg:h-24'
          }`}
        >
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

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-ink-100/85 transition after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary-400 after:transition-all hover:text-white hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              className="hidden h-10 w-10 items-center justify-center rounded-pill text-ink-100 transition hover:bg-white/10 hover:text-white sm:flex"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <a
              href={brand.phoneHref}
              className="hidden items-center gap-2 text-sm font-medium text-ink-100 transition hover:text-white lg:flex"
            >
              <Phone className="h-[18px] w-[18px] text-primary-300" />
              {brand.phone}
            </a>
            <a href="#reservation" className="btn-primary hidden px-6 py-3 sm:inline-flex">
              Book Catering
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-pill text-white transition hover:bg-white/10 lg:hidden"
            >
              {open ? <Close className="h-5 w-5" /> : <MenuBars className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-ink-800 transition-all duration-300 lg:hidden ${
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="section-wrap flex flex-col gap-1 py-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-ink-100 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={brand.phoneHref}
            className="mt-2 flex items-center gap-2 rounded-2xl px-4 py-3 text-base font-medium text-primary-200"
          >
            <Phone className="h-[18px] w-[18px]" />
            {brand.phone}
          </a>
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            Book Catering
          </a>
        </nav>
      </div>
    </header>
  )
}
