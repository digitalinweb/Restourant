import { IMG } from './images.js'

export const faq = {
  eyebrow: 'FAQ',
  titleLead: 'Questions we get',
  titleAccent: 'every week',
  description: 'Still unsure about something? Our events team is one message away.',
  mascot: IMG.mascot,
  mascotCaption: 'Chef Marco, your guide to every question',
  contactCta: { label: 'Ask Us Anything', href: '#contact' },
  items: [
    {
      q: 'Do you deliver outside San Francisco?',
      a: 'Yes. We deliver within a 40-mile radius of our warehouse kitchen, which covers the whole Bay Area. For events further out we can arrange a refrigerated courier partner, just mention it in your booking request.',
    },
    {
      q: 'How far in advance should I book catering?',
      a: 'For full-service catering we recommend 3 to 6 weeks so we can lock the seasonal menu and reserve staff. Table reservations can usually be made up to 2 weeks ahead, and we keep a few same-day seats for walk-ins.',
    },
    {
      q: 'Can you accommodate allergies and dietary restrictions?',
      a: 'Absolutely. We handle gluten-free, vegetarian, vegan, nut-free and shellfish-free requests as standard. All of our prep stations are separated, so cross-contact is managed properly rather than as an afterthought.',
    },
    {
      q: 'Do you offer tastings before the event?',
      a: 'We offer a complimentary tasting for events of 50 guests or more, hosted in our kitchen or at your venue. For smaller orders we can arrange a takeaway tasting box for a flat $45, credited back to your final invoice.',
    },
    {
      q: 'What is the minimum order?',
      a: 'Table reservations start at 2 guests. Catered events have a minimum of 20 guests for the main course service, and 40 guests for full buffet or family-style service.',
    },
    {
      q: 'Do you provide plates, cutlery, glassware and staff?',
      a: 'Yes. Every catering package can include rentals, serving staff, bartenders, setup and cleanup. We will send a detailed equipment list with your quote so nothing is missed on the day.',
    },
  ],
}
