const u = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const promoItems = [
  {
    id: 'shrimp-scampi',
    name: 'Garlic Shrimp Scampi',
    image: u('photo-1565680018434-b513d5e5fd47'),
    badge: '20% OFF UPTO $80',
    price: 24,
    oldPrice: 30,
    rating: 4.9,
    reviews: 312,
    cookTime: '25 min',
    calories: '520 kcal',
  },
  {
    id: 'truffle-burger',
    name: 'Truffle Wagyu Burger',
    image: u('photo-1550547660-d9450f859349'),
    badge: 'Chef’s Special',
    price: 19,
    oldPrice: null,
    rating: 4.8,
    reviews: 268,
    cookTime: '18 min',
    calories: '780 kcal',
  },
  {
    id: 'salmon',
    name: 'Miso Glazed Salmon',
    image: u('photo-1467003909585-2f8a72700288'),
    badge: 'NEW THIS SEASON',
    price: 32,
    oldPrice: null,
    rating: 5.0,
    reviews: 194,
    cookTime: '30 min',
    calories: '610 kcal',
  },
]

export const menuCategories = [
  {
    id: 'appetizer',
    name: 'Appetizer',
    description: 'Small plates to open the palate',
    items: [
      {
        name: 'Burrata & Heirloom Tomato',
        description: 'Basil oil, aged balsamic, grilled sourdough',
        price: 16,
        image: u('photo-1540189549336-e6e99c3679fe', 600),
        tags: ['Vegetarian'],
      },
      {
        name: 'Crispy Calamari Rings',
        description: 'Lemon aioli, smoked paprika, parsley',
        price: 18,
        image: u('photo-1604908176997-125f25cc6f3d', 600),
        tags: [],
      },
      {
        name: 'Truffle Mac & Cheese Bites',
        description: 'Three-cheese blend, panko crust, scallion',
        price: 14,
        image: u('photo-1543339494-b4cd4f7ba686', 600),
        tags: ['Vegetarian'],
      },
      {
        name: 'Spiced Lamb Skewers',
        description: 'Harissa yogurt, warm flatbread, mint',
        price: 19,
        image: u('photo-1529692236671-f1f6cf9683ba', 600),
        tags: ['Chef’s pick'],
      },
    ],
  },
  {
    id: 'main-course',
    name: 'Main Course',
    description: 'The heart of every Caterly table',
    items: [
      {
        name: 'Wagyu Ribeye, Peppercorn',
        description: 'Charred asparagus, potato terrine, red wine jus',
        price: 48,
        image: u('photo-1544025162-d76694265947', 600),
        tags: ['Signature'],
      },
      {
        name: 'Miso Glazed Salmon',
        description: 'Forbidden rice, bok choy, yuzu beurre blanc',
        price: 32,
        image: u('photo-1467003909585-2f8a72700288', 600),
        tags: ['Gluten free'],
      },
      {
        name: 'Wild Mushroom Risotto',
        description: 'Arborio, truffle oil, aged parmesan, chive',
        price: 28,
        image: u('photo-1476124369491-e7addf5db371', 600),
        tags: ['Vegetarian'],
      },
      {
        name: 'Slow Braised Short Rib',
        description: 'Celery root purée, horseradish gremolata',
        price: 38,
        image: u('photo-1547592180-85f173990554', 600),
        tags: [],
      },
    ],
  },
  {
    id: 'dessert',
    name: 'Dessert',
    description: 'A sweet finish, always house-made',
    items: [
      {
        name: 'Molten Chocolate Torte',
        description: 'Flaky sea salt, vanilla bean gelato',
        price: 12,
        image: u('photo-1624353365286-3f8d62daad51', 600),
        tags: ['House favourite'],
      },
      {
        name: 'Pistachio Tiramisu',
        description: 'Espresso-soaked savoiardi, mascarpone',
        price: 11,
        image: u('photo-1571877227200-a0d98ea607e9', 600),
        tags: [],
      },
      {
        name: 'Citrus Panna Cotta',
        description: 'Pink grapefruit, olive oil, pistachio crunch',
        price: 10,
        image: u('photo-1488477181946-6428a0291777', 600),
        tags: ['Gluten free'],
      },
      {
        name: 'Sourdough Bread Board',
        description: 'Cultured butter, sea salt, honey (shareable)',
        price: 9,
        image: u('photo-1509440159596-0249088772ff', 600),
        tags: ['Vegetarian'],
      },
    ],
  },
  {
    id: 'drink',
    name: 'Drink',
    description: 'House sodas, brews & cocktails',
    items: [
      {
        name: 'Sicilian Lemon Soda',
        description: 'Fresh-pressed lemon, mint, soda',
        price: 8,
        image: u('photo-1513558161293-cdaf765ed2fd', 600),
        tags: ['Zero proof'],
      },
      {
        name: 'Cold Brew Reserve',
        description: '18-hour steep, single origin, orange peel',
        price: 7,
        image: u('photo-1495474472287-4d71bcdd2085', 600),
        tags: [],
      },
      {
        name: 'Fig & Rosemary Martini',
        description: 'Dry gin, fig liqueur, rosemary smoke',
        price: 18,
        image: u('photo-1544145945-f90425340c7e', 600),
        tags: ['Signature cocktail'],
      },
      {
        name: 'Sparkling Elderflower',
        description: 'Elderflower, lime, prosecco, thyme',
        price: 15,
        image: u('photo-1546171753-97d7676e4602', 600),
        tags: ['Low ABV'],
      },
    ],
  },
]

export const menuCta = {
  label: 'Download Full Menu (PDF)',
  href: '#reservation',
  note: 'Tasting menu, dietary options & beverage pairing included',
}
