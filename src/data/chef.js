import { IMG, avatar } from './images.js'

export const chef = {
  eyebrow: 'Meet the Chef',
  titleLead: 'Cooking with',
  titleAccent: 'Confidence',
  name: 'Marcus Wellington',
  role: 'Executive Chef & Founder',
  quote: 'A great plate should look like it happened by accident — and taste like it took all night.',
  bio: [
    'Marcus spent eleven years running the pastry station of a two-star kitchen in Copenhagen before coming home to San Francisco with a single cast-iron pan and Rosa’s recipe book.',
    'Today he writes every Caterly menu, walks the morning market with the prep team, and still plates the first dish of service himself.',
  ],
  image: IMG.chef,
  badge: { label: 'James Beard nominated', sub: '2024 Outstanding Chef' },
  stats: [
    { value: '12+', label: 'Years of Experience' },
    { value: '850+', label: 'Events Catered' },
    { value: '98%', label: 'Client Satisfaction' },
  ],
  cta: { label: 'Order Now', href: '#order' },
  signature: 'Marcus W.',
  team: [
    { name: 'Aria Kim', role: 'Head of Pastry', image: avatar('photo-1494790108377-be9c29b29330') },
    { name: 'Diego Ramos', role: 'Sous Chef', image: avatar('photo-1507003211169-0a1dd7228f2d') },
    { name: 'Lena Fischer', role: 'Events Director', image: avatar('photo-1534528741775-53994a69daeb') },
  ],
}
