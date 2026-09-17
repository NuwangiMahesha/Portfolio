import type { Project } from '../types';

/**
 * Live client-facing work. `image` is intentionally left undefined — drop a real
 * screenshot URL in to replace the placeholder browser frame for any project.
 */
export const projects: Project[] = [
{
  id: 'aeon',
  index: '05',
  title: 'AEON Indoor Sports',
  category: 'Booking Platform',
  url: 'https://aeon-indoor-sports-booking-platform.vercel.app/',
  focus: 'Indoor sports booking platform and interactive application experience.',
  filters: ['Web Applications', 'Booking'],
  scale: 'hero',
  featured: true,
  image: '/images/AEON.png',
  deployment: 'Vercel'
},
{
  id: 'ayiraa',
  index: '08',
  title: 'AYIRAA',
  category: 'E-Commerce',
  url: 'https://ayiraa-e-commerce-site.vercel.app/',
  focus: 'E-commerce interface, product presentation and online shopping experience.',
  filters: ['E-Commerce', 'Web Applications'],
  scale: 'hero',
  featured: true,
  image: '/images/Ayiraa.png',
  deployment: 'Vercel'
},
{
  id: 'syncone',
  index: '06',
  title: 'Syncone RCM',
  category: 'Healthcare / Corporate Website',
  url: 'https://www.synconercm.com/',
  focus: 'Professional corporate website and healthcare technology presentation.',
  filters: ['Websites', 'Healthcare'],
  scale: 'large',
  featured: true,
  image: '/images/Sync_Rcm.png'
},
{
  id: 'jr-hospital',
  index: '01',
  title: 'JR Hospital',
  category: 'Healthcare Website',
  url: 'https://jr-hospital-website-design.vercel.app/',
  focus:
  'Healthcare website, service presentation, responsive interface and professional digital experience.',
  filters: ['Websites', 'Healthcare'],
  scale: 'large',
  featured: false,
  image: '/images/JR-Hospital.png',
  deployment: 'Vercel'
},
{
  id: 'monkey-tattoo',
  index: '03',
  title: 'Monkey Tattoo',
  category: 'Creative Website',
  url: 'https://monkey-tattoo.vercel.app/',
  focus: 'Creative brand website, visual storytelling and immersive UI.',
  filters: ['Websites', 'Creative'],
  scale: 'medium',
  featured: false,
  image: '/images/Monkeytattoo.png',
  deployment: 'Vercel'
},
{
  id: 'cloud-nine',
  index: '09',
  title: 'Cloud Nine Events',
  category: 'Events / Hospitality',
  url: 'https://cloud-nine-events.vercel.app/',
  focus: 'Event-focused website, visual storytelling and responsive design.',
  filters: ['Websites', 'Hospitality'],
  scale: 'medium',
  featured: false,
  image: '/images/nine.png',
  deployment: 'Vercel'
},
{
  id: 'shah',
  index: '07',
  title: 'SHAH Hospitality Group',
  category: 'Hospitality Website',
  url: 'https://sha-hospitality-group.vercel.app/',
  focus: 'Hospitality digital experience and business presentation.',
  filters: ['Websites', 'Hospitality'],
  scale: 'small',
  featured: false,
  image: '/images/SHA Hospitality.png',
  deployment: 'Vercel'
},
{
  id: 'normans',
  index: '02',
  title: "Norman's Cleaning",
  category: 'Business Website',
  url: 'https://normans-cleaning-website.vercel.app/',
  focus: 'Cleaning service website, modern landing-page design and service presentation.',
  filters: ['Websites', 'Business'],
  scale: 'small',
  featured: false,
  image: "/images/Norman's Cleaning.png",
  deployment: 'Vercel'
},
{
  id: 'frimz',
  index: '04',
  title: 'Frimz Cleaning',
  category: 'Business Website',
  url: 'https://frimz-cleaning.vercel.app/',
  focus: 'Service business website with modern responsive presentation.',
  filters: ['Websites', 'Business'],
  scale: 'small',
  featured: false,
  image: '/images/frimz_cleaning.png',
  deployment: 'Vercel'
}];


export const projectFilters = [
'All',
'Websites',
'Web Applications',
'E-Commerce',
'Booking',
'Healthcare',
'Business',
'Hospitality',
'Creative'] as
const;

export type ProjectFilter = (typeof projectFilters)[number];