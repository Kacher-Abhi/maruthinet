export interface PlanPrice {
  1: number;
  3: number;
  6: number;
  12: number;
}

export interface Plan {
  id: string;
  speed: string;
  type: 'wifi' | 'entertainment' | 'enterprise';
  prices: PlanPrice;
  data: string;
  iptv: boolean;
  otts: string[];
  notes: string[];
  popular?: boolean;
}

export const wifiPlans: Plan[] = [
  {
    id: 'wifi-60',
    speed: '60 Mbps',
    type: 'wifi',
    prices: { 1: 549, 3: 1497, 6: 2694, 12: 4788 },
    data: 'Unlimited',

    iptv: false,
    otts: [],
    notes: ['Commercial usage policy applicable for all unlimited Fiber plans.'],
  },
  {
    id: 'wifi-100',
    speed: '100 Mbps',
    type: 'wifi',
    prices: { 1: 749, 3: 2097, 6: 3894, 12: 7188 },
    data: 'Unlimited',

    iptv: false,
    otts: [],
    notes: ['Commercial usage policy applicable for all unlimited Fiber plans.'],
    popular: true,
  },
  {
    id: 'wifi-200',
    speed: '200 Mbps',
    type: 'wifi',
    prices: { 1: 859, 3: 2397, 6: 4494, 12: 8388 },
    data: 'Unlimited',

    iptv: false,
    otts: [],
    notes: ['Commercial usage policy applicable for all unlimited Fiber plans.'],
  },
  {
    id: 'wifi-300',
    speed: '300 Mbps',
    type: 'wifi',
    prices: { 1: 1149, 3: 3297, 6: 5994, 12: 10788 },
    data: 'Unlimited',

    iptv: false,
    otts: [],
    notes: ['Commercial usage policy applicable for all unlimited Fiber plans.'],
  },  
  {
    id: 'wifi-400',
    speed: '400 Mbps',
    type: 'wifi',
    prices: { 1: 1249, 3: 3597, 6: 6894, 12: 11988 },
    data: 'Unlimited',

    iptv: false,
    otts: [],
    notes: ['Commercial usage policy applicable for all unlimited Fiber plans.'],
  },
    {
    id: 'wifi-500',
    speed: '500 Mbps',
    type: 'wifi',
    prices: { 1: 1349, 3: 3897, 6: 7194, 12: 13188 },
    data: 'Unlimited',

    iptv: false,
    otts: [],
    notes: ['Commercial usage policy applicable for all unlimited Fiber plans.'],
  },
];

export const entertainmentPlans: Plan[] = [
  {
    id: 'ent-60',
    speed: '60 Mbps',
    type: 'entertainment',
    prices: { 1: 699, 3: 1, 6: 4194, 12: 7188 },
    data: 'Unlimited',

    iptv: true,
    otts: ['JioHotstar', 'ZEE5', 'Sony Liv', 'Sun NXT', 'Hoichoi', 'Discovery+'],
    notes: [
      'Commercial usage policy applicable for all unlimited Fiber plans.',
    ],
  },
  {
    id: 'ent-100',
    speed: '100 Mbps',
    type: 'entertainment',
    prices: { 1: 899, 3: 2699, 6: 5299, 12: 9999 },
    data: 'Unlimited',

    iptv: true,
    otts: ['JioHotstar', 'Sony Liv', 'ZEE5', 'Sun NXT', 'Hoichoi', 'Discovery+'],
    notes: [
      'Commercial usage policy applicable for all unlimited Fiber plans.',
    ],
    popular: true,
  },
  {
    id: 'ent-200',
    speed: '200 Mbps',
    type: 'entertainment',
    prices: { 1: 999, 3: 3999, 6: 7899, 12: 14999 },
    data: 'Unlimited',

    iptv: true,
    otts: ['JioHotstar', 'Sony Liv', 'ZEE5', 'Sun NXT', 'Hoichoi', 'Discovery+', 'TimesPlay', 'Lionsgate Play'],
    notes: [
      'Bundled Amazon Prime Lite subscription is valid for 1 years.',
      'Commercial usage policy applicable for all unlimited Fiber plans.',
    ],
  },
  {
    id: 'ent-300',
    speed: '300 Mbps',
    type: 'entertainment',
    prices: { 1: 1099, 3: 5499, 6: 10799, 12: 19999 },
    data: 'Unlimited',

    iptv: true,
    otts: ['JioHotstar', 'Sony Liv', 'ZEE5', 'Sun NXT', 'Hoichoi', 'Discovery+', 'TimesPlay', 'TarangPlus', 'Eros Now', 'Lionsgate Play', 'ShemarooMe', 'ETV Win', 'FanCode (Via JioTV+)'],
    notes: [
      'Premium sports content not included in ZEE5 subscription.',
      'Commercial usage policy applicable for all unlimited Fiber plans.'
    ],
  },{
    id: 'ent-400',
    speed: '400 Mbps',
    type: 'entertainment',
    prices: { 1: 1199, 3: 5499, 6: 10799, 12: 19999 },
    data: 'Unlimited',

    iptv: true,
    otts: ['Amazon Prime Lite', 'JioHotstar', 'Sony Liv', 'ZEE5', 'Sun NXT', 'Hoichoi', 'Discovery+', 'TimesPlay', 'TarangPlus', 'Eros Now', 'Lionsgate Play', 'ShemarooMe', 'ETV Win', 'FanCode (Via JioTV+)'],
    notes: [
      'Bundled Amazon Prime Lite subscription is valid for 1 year.',
      'Premium sports content not included in ZEE5 subscription.',
      'Commercial usage policy applicable for all unlimited Fiber plans.'
    ],
  },{
    id: 'ent-500',
    speed: '500 Mbps',
    type: 'entertainment',
    prices: { 1: 1299, 3: 5499, 6: 10799, 12: 19999 },
    data: 'Unlimited',

    iptv: true,
    otts: ['Amazon Prime Lite', 'JioHotstar', 'Sony Liv', 'ZEE5', 'Sun NXT', 'Hoichoi', 'Discovery+', 'TimesPlay', 'TarangPlus', 'Eros Now', 'Lionsgate Play', 'ShemarooMe', 'ETV Win', 'FanCode (Via JioTV+)'],
    notes: [
      'Bundled Amazon Prime Lite subscription is valid for 1 year.',
      'Premium sports content not included in ZEE5 subscription.',
      'Commercial usage policy applicable for all unlimited Fiber plans.'
    ],
  },
];

export const enterprisePlans: Plan[] = [
  {
    id: 'ent-50',
    speed: '50 Mbps',
    type: 'enterprise',
    prices: { 1: 1499, 3: 3999, 6: 7799, 12: 14999 },
    data: 'Unlimited (Priority)',

    iptv: false,
    otts: [],
    notes: ['Dedicated bandwidth with SLA guarantee.', 'Priority support with 2-hour resolution.'],
  },
  {
    id: 'ent-100',
    speed: '100 Mbps',
    type: 'enterprise',
    prices: { 1: 2499, 3: 6999, 6: 13799, 12: 26999 },
    data: 'Unlimited (Priority)',

    iptv: false,
    otts: [],
    notes: ['Dedicated bandwidth with SLA guarantee.', 'Static IP included.', 'Priority support with 2-hour resolution.'],
    popular: true,
  },
  {
    id: 'ent-200',
    speed: '200 Mbps',
    type: 'enterprise',
    prices: { 1: 3999, 3: 10999, 6: 21799, 12: 42999 },
    data: 'Unlimited (Priority)',

    iptv: false,
    otts: [],
    notes: ['Dedicated bandwidth with SLA guarantee.', 'Static IP included.', '24/7 dedicated account manager.'],
  },
  {
    id: 'ent-500',
    speed: '500 Mbps',
    type: 'enterprise',
    prices: { 1: 6999, 3: 19999, 6: 39799, 12: 78999 },
    data: 'Unlimited (Priority)',

    iptv: false,
    otts: [],
    notes: ['Dedicated bandwidth with SLA guarantee.', 'Static IP included.', '24/7 dedicated account manager.', 'On-site support available.'],
  },
  {
    id: 'ent-giga',
    speed: '1 Gbps',
    type: 'enterprise',
    prices: { 1: 14999, 3: 42999, 6: 84999, 12: 169999 },
    data: 'Unlimited (Priority)',

    iptv: false,
    otts: [],
    notes: ['Dedicated fiber connection.', 'Static IP block included.', '24/7 dedicated account manager.', 'On-site support with 1-hour resolution.', '99.99% uptime SLA.'],
  },
  {
    id: 'ent-custom',
    speed: 'Custom',
    type: 'enterprise',
    prices: { 1: 0, 3: 0, 6: 0, 12: 0 },
    data: 'As per requirement',
    iptv: false,
    otts: [],
    notes: ['Custom bandwidth up to 10 Gbps.', 'Tailored SLA and support.', 'Dedicated fiber with redundancy.', 'Contact us for a custom quote.'],
  },
]

export const testimonials = [
  {
    name: 'Ravi Kumar',
    location: 'Madhapur',
    text: 'Maruthi Net has been a game changer for our home. The 100 Mbps connection is blazing fast and the OTT subscriptions are a great bonus!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    location: 'Gachibowli',
    text: 'Excellent service and minimal downtime. The installation was smooth and the support team is very responsive.',
    rating: 5,
  },
  {
    name: 'Srinivas Reddy',
    location: 'Kompally',
    text: 'Switched from Airtel to Maruthi Net and I am impressed. Better pricing and the same if not better speed. Highly recommended!',
    rating: 4,
  },
];

export const faqs = [
  {
    q: 'How do I subscribe to a Maruthi Net Fiber plan?',
    a: 'You can subscribe by visiting our Plans page, selecting your preferred plan, and filling out the contact form. Our team will reach out to you within 24 hours to schedule installation.',
  },
  {
    q: 'Is there a limit on the data I can use?',
    a: 'All our Fiber plans come with truly unlimited data. There are no FUP limits or data caps. You can stream, download, and browse without any restrictions.',
  },
  {
    q: 'What OTT subscriptions are included with the Entertainment plans?',
    a: 'Our Entertainment plans include popular streaming services like Netflix, Amazon Prime Lite, JioHotstar, ZEE5, Sony Liv, and many more. The exact bundle depends on the plan you choose.',
  },
  {
    q: 'Can I upgrade or downgrade my plan later?',
    a: 'Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will be applied from the next billing cycle.',
  },
  {
    q: 'What is the installation process like?',
    a: 'After you subscribe, our technical team will visit your location to install the fiber connection. The process typically takes 1-2 hours. We handle everything from cabling to router setup.',
  },
  {
    q: 'Do you offer IPTV services?',
    a: 'Yes, all our Entertainment plans include IPTV with 1000+ TV channels. You can watch live TV on your TV, mobile, or laptop with our IPTV service.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major payment methods including UPI, credit/debit cards, net banking, and wallets. You can pay online through our website or through our mobile app.',
  },
  {
    q: 'Is there a contract or lock-in period?',
    a: 'We offer flexible 1-month, 3-month, 6-month, and 12-month plans with no long-term contract. You can choose what works best for you.',
  },
];

export const whyChooseUs = [
  {
    icon: '🚀',
    title: 'Blazing Fast Speed',
    desc: 'Experience lightning-fast internet with speeds up to 300 Mbps. Perfect for streaming, gaming, and working from home.',
  },
  {
    icon: '🔧',
    title: 'Advanced Technology',
    desc: 'We use the latest GPON fiber technology ensuring stable connectivity with minimal latency and jitter.',
  },
  {
    icon: '📞',
    title: '24/7 Support',
    desc: 'Our dedicated support team is available around the clock to resolve any issues you may face.',
  },
  {
    icon: '📺',
    title: 'OTT & IPTV',
    desc: 'Get access to premium OTT platforms and 1000+ live TV channels with our Entertainment plans.',
  },
];

export const ottLogos: Record<string, string> = {
  'Amazon Prime Lite': 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png',
  'JioHotstar': 'https://upload.wikimedia.org/wikipedia/commons/3/3e/JioHotstar_logo.svg',
  'Sony Liv': 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Sony_LIV_logo.png',
  'ZEE5': 'https://upload.wikimedia.org/wikipedia/commons/4/44/ZEE5_logo.png',
  'Sun NXT': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Sun_NXT_Logo.png',
  'Hoichoi': 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Hoichoi_logo.png',
  'Discovery+': 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Discovery%2B_Logo.svg',
  'TimesPlay': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Times_Prime_Logo.png',
  'TarangPlus': '',
  'Eros Now': 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Eros_Now_logo.png',
  'Lionsgate Play': '',
  'ShemarooMe': '',
  'ETV Win': '',
  'FanCode (Via JioTV+)': '',
};
