import { IMG } from './images.js'

export const hero = {
  eyebrow: 'Premium Catering Services',
  titleLead: 'Bringing Flavor to Every',
  titleAccent: 'Occasion You Love',
  description:
    'From intimate dinner parties to 800-guest corporate galas, our master chefs craft seasonal menus, handle every detail, and deliver them warm to your door.',
  primaryCta: { label: 'Book Catering', href: '#reservation' },
  secondaryCta: { label: 'View Menu', href: '#menu' },
  highlights: [
    { value: '850+', label: 'Events Catered' },
    { value: '12 yrs', label: 'Craft & Heritage' },
    { value: '4.9', label: 'Average Rating' },
  ],
  images: [IMG.hero.topLeft, IMG.hero.topRight, IMG.hero.bottomLeft, IMG.hero.bottomRight],
  floatingBadge: {
    rating: '4.9',
    label: 'Loved by 2,400+ food lovers',
  },
}
