import { IMG } from './images.js'

export const story = {
  eyebrow: 'Our Story',
  titleLead: 'A family kitchen that grew into a',
  titleAccent: 'Citywide Table',
  paragraphs: [
    'Caterly began in 2013 as a six-seat counter in the Mission district, run by our grandmother Rosa with a single wood-fired oven and a hand-written recipe book. She believed food should arrive at your table still warm, still generous, still made by someone who knows your name.',
    'Twelve years later we cook for more than 850 events a year — but the recipe book has not changed. Every menu still starts at the market, still gets tasted three times, and still leaves our kitchen with the exact moment it should be served.',
  ],
  cta: { label: 'Read Our Full Story', href: '#gallery' },
  image: IMG.story,
  imageDetail: IMG.storyDetail,
  facts: [
    { value: '2013', label: 'Founded in San Francisco' },
    { value: '3×', label: 'Tasted before every service' },
    { value: 'Local', label: 'Produce from 11 farms' },
  ],
  timeline: [
    { year: '2013', title: 'The first counter', text: 'Rosa opens a six-seat wood-fired counter on Valencia Street.' },
    { year: '2017', title: 'Into the warehouse', text: 'We move into a 4,000 sq ft kitchen and start catering full events.' },
    { year: '2021', title: 'Farm partnerships', text: 'Eleven local farms sign seasonal supply agreements with us.' },
    { year: '2025', title: '850 events later', text: 'Still cooking every plate to order, still delivering warm.' },
  ],
}
