import { IMG } from './images.js'

export const delivery = {
  eyebrow: 'Hungry now',
  titleLead: 'Order Delicious Food Right to',
  titleAccent: 'Your Doorstep',
  description:
    'Weeknight delivery, party trays and full catering — the same kitchen, delivered hot within 40 miles.',
  cta: { label: 'Order Now', href: '#menu' },
  secondaryCta: { label: 'Build a Catering Box', href: '#reservation' },
  badge: {
    name: 'Shrimp Scampi',
    detail: 'Garlic · butter · white wine',
    price: '$24',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=500&q=80',
  },
  platforms: [
    { name: 'DoorDash', note: '30 min avg' },
    { name: 'Uber Eats', note: '35 min avg' },
    { name: 'Caterly Direct', note: '25 min avg' },
  ],
  images: [IMG.delivery, IMG.deliverySide],
}

export const newsletter = {
  eyebrow: 'Stay Hungry',
  titleLead: 'Get first access to seasonal menus',
  titleAccent: '& private events',
  description:
    'One email a month: new tasting menus, farm stories and a subscriber-only 15% off code. No spam, unsubscribe anytime.',
  perks: [
    'Subscriber-only seasonal menus',
    '15% off your first order',
    'Early access to chef’s table nights',
  ],
  field: 'Your email address',
  cta: 'Subscribe',
  successTitle: 'You’re on the list',
  successText: 'Check your inbox — your 15% off code is on its way.',
  privacy: 'We respect your inbox. Read our privacy policy.',
  image: IMG.newsletter,
}
