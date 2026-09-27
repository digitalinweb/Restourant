export function Eyebrow({ children, tone = 'light', className = '' }) {
  const tones = {
    light: 'border-primary-200 bg-white/70 text-primary-600',
    dark: 'border-white/25 bg-white/10 text-primary-200',
  }
  return (
    <span className={`eyebrow ${tones[tone]} ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = 'center',
  tone = 'light',
  className = '',
}) {
  const isCenter = align === 'center'
  const titleColor = tone === 'dark' ? 'text-white' : 'text-ink-800'
  const descColor = tone === 'dark' ? 'text-ink-200' : 'text-ink-500'

  return (
    <header
      className={`flex flex-col ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-5 text-display-sm font-semibold sm:text-display-md ${titleColor}`}
      >
        {title}{' '}
        {accent ? <span className="text-primary-500 italic">{accent}</span> : null}
      </h2>
      {description ? (
        <p className={`mt-5 max-w-2xl text-base leading-relaxed ${descColor}`}>
          {description}
        </p>
      ) : null}
    </header>
  )
}
