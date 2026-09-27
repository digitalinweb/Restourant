import { IMG, avatar } from './images.js'

export const process = {
  eyebrow: 'Our Process',
  titleLead: 'Master the Art of',
  titleAccent: 'Cooking',
  description:
    'From the first tasting to the last tray loaded, our four-step process keeps every order calm and on time.',
  steps: [
    {
      id: 'choose',
      number: '01',
      title: 'Choose Your Menu',
      text: 'Pick a curated package or build a custom tasting menu with our events team.',
      icon: 'clipboard',
    },
    {
      id: 'confirm',
      number: '02',
      title: 'Confirm The Details',
      text: 'We lock your headcount, dietary needs, venue logistics and delivery window.',
      icon: 'check',
    },
    {
      id: 'prepare',
      number: '03',
      title: 'Cook & Plate Fresh',
      text: 'Your menu is cooked the morning of the event and plated in our kitchen, never reheated.',
      icon: 'flame',
    },
    {
      id: 'deliver',
      number: '04',
      title: 'Deliver To Your Door',
      text: 'Insulated, timed and set up on arrival — hot food, exactly when you need it.',
      icon: 'truck',
    },
  ],
  collage: [
    { src: IMG.kitchen, alt: 'Chef prepping the morning service' },
    { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=600&q=80', alt: 'Seasoning a finished plate' },
    { src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80', alt: 'Hands plating a dish' },
    { src: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=600&q=80', alt: 'The Caterly kitchen at work' },
  ],
  floatingTestimonial: {
    quote: 'They handled 300 guests without a single hitch. The short rib was the talk of the night.',
    name: 'Sophia Reyes',
    role: 'Wedding client, 2024',
    avatar: avatar('photo-1517841905240-472988babdf9'),
    rating: 5,
  },
  achievements: [
    { label: 'Freshly cooked today', icon: 'leaf' },
    { label: '98% delivered on time', icon: 'clock' },
  ],
  cta: { label: 'Cook with Master Chefs', href: '#reservation' },
  ctaImage: IMG.chef,
}
