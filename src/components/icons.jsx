const s = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const wrap = (paths) => (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    {paths}
  </svg>
)

export const ArrowRight = wrap(
  <>
    <path d="M5 12h14" {...s} />
    <path d="m13 6 6 6-6 6" {...s} />
  </>,
)

export const ArrowUpRight = wrap(
  <>
    <path d="M7 17 17 7" {...s} />
    <path d="M9 7h8v8" {...s} />
  </>,
)

export const Phone = wrap(
  <path
    d="M6.6 3.5h-2A1.6 1.6 0 0 0 3 5.2C3 13.4 10.6 21 18.8 21a1.6 1.6 0 0 0 1.7-1.6v-2a1.3 1.3 0 0 0-1-1.3l-3-.6a1.3 1.3 0 0 0-1.4.6l-.8 1.3a12 12 0 0 1-5.7-5.7l1.3-.8a1.3 1.3 0 0 0 .6-1.4l-.6-3a1.3 1.3 0 0 0-1.3-1Z"
    {...s}
  />,
)

export const Search = wrap(
  <>
    <circle cx="11" cy="11" r="6.5" {...s} />
    <path d="m16 16 4.5 4.5" {...s} />
  </>,
)

export const MenuBars = wrap(
  <>
    <path d="M4 7h16" {...s} />
    <path d="M4 12h16" {...s} />
    <path d="M4 17h10" {...s} />
  </>,
)

export const Close = wrap(
  <>
    <path d="M6 6l12 12" {...s} />
    <path d="M18 6 6 18" {...s} />
  </>,
)

export const Star = ({ filled = true, ...props }) => (
  <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
    <path
      d="M10 1.8l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L2.2 7.5l5.4-.8L10 1.8Z"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
)

export const Plus = ({ open = false, ...props }) => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
    {...props}
  >
    <path d="M10 4v12" {...s} />
    <path d="M4 10h12" {...s} />
  </svg>
)

export const Trophy = wrap(
  <>
    <path d="M7 4.5h10v4a5 5 0 0 1-10 0v-4Z" {...s} />
    <path d="M7 6H4.5v1.5A3.5 3.5 0 0 0 8 11M17 6h2.5v1.5A3.5 3.5 0 0 1 16 11" {...s} />
    <path d="M12 13.5V17" {...s} />
    <path d="M8.5 20.5h7M10 17h4l.5 3.5h-5L10 17Z" {...s} />
  </>,
)

export const Leaf = wrap(
  <>
    <path d="M4 20c0-8 5-13 16-14 0 11-5 15-12 15-2 0-3-.4-4-1Z" {...s} />
    <path d="M4 20c3-4 6-6.5 10-8.5" {...s} />
  </>,
)

export const Clock = wrap(
  <>
    <circle cx="12" cy="12" r="8.5" {...s} />
    <path d="M12 7.5V12l3 2" {...s} />
  </>,
)

export const Flame = wrap(
  <path
    d="M12 3s5 4.2 5 8.6a5 5 0 0 1-10 0c0-1.7.8-3 1.7-4 .2 1.2 1 2 1.8 2 1.2 0 1.4-1.6.5-4.4A8.9 8.9 0 0 1 12 3Z"
    {...s}
  />,
)

export const Truck = wrap(
  <>
    <path d="M3 7.5h10v9H3z" {...s} />
    <path d="M13 10.5h3.8L20 14v2.5h-7" {...s} />
    <circle cx="7" cy="18" r="1.8" {...s} />
    <circle cx="16.5" cy="18" r="1.8" {...s} />
  </>,
)

export const Clipboard = wrap(
  <>
    <rect x="5" y="4.5" width="14" height="16" rx="2.5" {...s} />
    <path d="M9 4.5V3.6A1.6 1.6 0 0 1 10.6 2h2.8A1.6 1.6 0 0 1 15 3.6v.9" {...s} />
    <path d="M9 11h6M9 15h4" {...s} />
  </>,
)

export const Check = wrap(<path d="m5 12.5 4.5 4.5L19 7" {...s} />)

export const CheckCircle = wrap(
  <>
    <circle cx="12" cy="12" r="8.5" {...s} />
    <path d="m8.3 12.2 2.6 2.6 4.9-5.2" {...s} />
  </>,
)

export const User = wrap(
  <>
    <circle cx="12" cy="8" r="4" {...s} />
    <path d="M4.5 20a7.5 7.5 0 0 1 15 0" {...s} />
  </>,
)

export const MapPin = wrap(
  <>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" {...s} />
    <circle cx="12" cy="10" r="2.6" {...s} />
  </>,
)

export const Mail = wrap(
  <>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" {...s} />
    <path d="m4 8 8 5.5L20 8" {...s} />
  </>,
)

export const Quote = wrap(
  <path
    d="M9.4 5.5C6.3 7 4.5 9.9 4.5 13.6c0 3 1.8 5 4.4 5 2.3 0 3.9-1.6 3.9-3.8 0-2.1-1.4-3.6-3.4-3.6-.4 0-.8.1-1 .2.4-1.9 1.8-3.4 3.9-4.4l-2.9-1.5Zm9.1 0C15.4 7 13.6 9.9 13.6 13.6c0 3 1.8 5 4.4 5 2.3 0 3.9-1.6 3.9-3.8 0-2.1-1.4-3.6-3.4-3.6-.4 0-.8.1-1 .2.4-1.9 1.8-3.4 3.9-4.4l-3-1.5Z"
    fill="currentColor"
  />,
)

export const ChevronDown = wrap(<path d="m6 9.5 6 6 6-6" {...s} />)

export const Utensils = wrap(
  <>
    <path d="M7 3v7a2 2 0 0 0 4 0V3" {...s} />
    <path d="M9 10v11" {...s} />
    <path d="M17 3c-1.5 1.5-2 3.5-2 6s.7 3 2 3v9" {...s} />
  </>,
)

export const ChefHat = wrap(
  <>
    <path
      d="M7 20h10M7.5 17.5h9v-2.2a3.9 3.9 0 1 0-2.3-7.3 3.9 3.9 0 0 0-7 0 3.9 3.9 0 0 0-2.3 7.3c.5.1.7.6.7 1.1v1.1Z"
      {...s}
    />
  </>,
)

export const Instagram = wrap(
  <>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" {...s} />
    <circle cx="12" cy="12" r="4" {...s} />
    <path d="M17 7.2h.01" {...s} strokeWidth="2.2" />
  </>,
)

export const Facebook = wrap(
  <path
    d="M14.5 8.5h2.2M14.5 8.5V7.3c0-.8.5-1.3 1.3-1.3h1M12.5 21v-7h2.4M12.5 14H10c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2.5"
    {...s}
  />,
)

export const XSocial = wrap(
  <>
    <path d="M5 5l14 14" {...s} />
    <path d="M19 5 5 19" {...s} />
  </>,
)

export const YouTube = wrap(
  <>
    <rect x="2.5" y="6" width="19" height="12" rx="4" {...s} />
    <path d="m11 10 4 2-4 2v-4Z" {...s} />
  </>,
)

export const KnifeIcon = wrap(
  <>
    <path d="M4 20 15 9" {...s} />
    <path d="M14 4.5c3 0 5.5 2.4 5.5 5.5L15 14l-4.5-4.5L14 4.5Z" {...s} />
  </>,
)

export const ChiliIcon = wrap(
  <>
    <path d="M8 3c5 1 8 4 8 9s-3 8-8 9c1-4 2-6 3-9" {...s} />
    <path d="M8 3c-1 2-1 3 0 4" {...s} />
  </>,
)

export const ChickenIcon = wrap(
  <>
    <path d="M20 5c0 8-5 13-13 13H4l1-4c-1.5-1-1-3 .5-4 1-1 2-1 3 0" {...s} />
    <path d="M9 6c2-1.5 5-1.5 7 .5" {...s} />
  </>,
)
