import { IMG } from './images.js'

export const location = {
  eyebrow: 'Visit Us',
  titleLead: 'Find the kitchen, then',
  titleAccent: 'find us inside',
  description:
    'We are tucked into the old warehouse district — walk in for a counter seat, or call ahead for the chef’s table.',
  image: IMG.location,
  address: {
    line1: '128 Willow Street, Warehouse District',
    line2: 'San Francisco, CA 94107',
    directions: 'Get directions',
  },
  mapEmbed:
    'https://www.google.com/maps?q=128+Willow+Street+San+Francisco+CA&output=embed',
  hours: [
    { day: 'Monday – Thursday', time: '11:00 AM – 10:00 PM', open: true },
    { day: 'Friday – Saturday', time: '11:00 AM – 12:00 AM', open: true },
    { day: 'Sunday', time: '10:00 AM – 9:00 PM', open: true },
    { day: 'Public Holidays', time: 'By reservation only', open: false },
  ],
  services: [
    { label: 'Dine-in', value: '42 seats · counter & table' },
    { label: 'Pickup', value: 'Ready in 20 minutes' },
    { label: 'Delivery', value: 'DoorDash · Uber · own fleet' },
    { label: 'Private dining', value: 'Up to 24 guests' },
  ],
  todayNote: 'Open today until 10:00 PM',
  cta: { label: 'Reserve a Table', href: '#reservation' },
}
