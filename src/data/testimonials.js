import { avatar } from './images.js'

export const testimonials = {
  eyebrow: 'Reviews',
  titleLead: 'Real plates, real people,',
  titleAccent: 'real reviews',
  description: 'Over 12,000 verified reviews across weddings, corporate events and weeknight deliveries.',
  summary: {
    rating: 4.9,
    outOf: 5,
    count: '12,480 reviews',
    highlights: [
      { label: 'Taste', value: 4.9 },
      { label: 'Timing', value: 4.9 },
      { label: 'Presentation', value: 5.0 },
    ],
  },
  items: [
    {
      name: 'Sophia Reyes',
      role: 'Wedding catering · 300 guests',
      avatar: avatar('photo-1517841905240-472988babdf9'),
      rating: 5,
      quote:
        'They served 300 guests and not one dish was late. The short rib and the burrata were the talk of the entire weekend.',
    },
    {
      name: 'Daniel Okafor',
      role: 'Corporate event · 800 guests',
      avatar: avatar('photo-1507003211169-0a1dd7228f2d'),
      rating: 5,
      quote:
        'Our quarterly summit ran on time because of Caterly. The team handled twelve dietary requirements without a complaint.',
    },
    {
      name: 'Amelia Hart',
      role: 'Weekly delivery subscriber',
      avatar: avatar('photo-1494790108377-be9c29b29330'),
      rating: 5,
      quote:
        'The salmon arrives still warm every single Friday. My whole team now orders for their own families too.',
    },
    {
      name: 'Nathan Brooks',
      role: 'Private dinner · 24 guests',
      avatar: avatar('photo-1500648767791-00dcc994a43e'),
      rating: 4,
      quote:
        'Beautifully plated tasting menu and genuinely excellent wine pairing. Setup was invisible, which is exactly what I wanted.',
    },
    {
      name: 'Priya Raman',
      role: 'Launch party · 150 guests',
      avatar: avatar('photo-1534528741775-53994a69daeb'),
      rating: 5,
      quote:
        'We changed the headcount twice in 48 hours and they absorbed it without complaint. That is why we rebook every year.',
    },
    {
      name: 'Marco Bianchi',
      role: 'Restaurant partner',
      avatar: avatar('photo-1506794778202-cad84cf45f1d'),
      rating: 5,
      quote:
        'I have worked with a lot of caterers. Caterly is the only one that gets the mise en place right every single service.',
    },
  ],
}
