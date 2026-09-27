import { Star } from './icons.jsx'

export default function StarRating({ value, count, className = '', iconClass = 'h-4 w-4' }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-0.5 text-accent-gold">
        {[1, 2, 3, 4, 5].map((step) => (
          <Star key={step} filled={value >= step} className={iconClass} />
        ))}
      </div>
      <span className="text-xs font-semibold text-ink-800">{value.toFixed(1)}</span>
      {count !== undefined ? (
        <span className="text-xs text-ink-400">({count})</span>
      ) : null}
    </div>
  )
}
