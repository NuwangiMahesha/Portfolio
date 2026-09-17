import type { BuildCapability, ProcessStage } from '../types';

export const profile = {
  name: 'Nuwangi Ariyasingha',
  title: 'Associate Software Engineer',
  location: 'Dehiwala, Sri Lanka',
  email: 'nuwangimahesha@gmail.com',
  phone: '+94 76 843 2345',
  github: 'https://github.com/NuwangiMahesha',
  linkedin: 'https://linkedin.com/in/nuwangi-ariyasingha-77a1a53a0',
  portfolio: 'https://portfolio-nuwangi.vercel.app/'
} as const;

export const heroMeta = [
'Associate Software Engineer',
'Sri Lanka',
'Full-Stack Development',
'Cloud & Web Solutions'] as
const;

export const capabilities: BuildCapability[] = [
{
  id: 'websites',
  title: 'Websites',
  description: 'Modern responsive business and corporate websites.'
},
{
  id: 'web-apps',
  title: 'Web Applications',
  description: 'Functional applications and internal business systems.'
},
{
  id: 'ecommerce',
  title: 'E-Commerce',
  description: 'Online shopping experiences and product-focused interfaces.'
},
{
  id: 'booking',
  title: 'Booking Platforms',
  description: 'Interactive reservation and booking experiences.'
},
{
  id: 'cloud',
  title: 'Cloud Solutions',
  description: 'Deployment and hosting using modern cloud platforms.'
},
{
  id: 'experiences',
  title: 'Digital Experiences',
  description: 'Responsive interfaces combining design and engineering.'
}];


export const processStages: ProcessStage[] = [
{
  id: 'discover',
  index: '01',
  title: 'Discover',
  description: 'Understand requirements, users and business objectives.'
},
{
  id: 'design',
  index: '02',
  title: 'Design',
  description: 'Create clear interfaces and experiences.'
},
{
  id: 'engineer',
  index: '03',
  title: 'Engineer',
  description: 'Develop responsive, functional and maintainable software.'
},
{
  id: 'deploy',
  index: '04',
  title: 'Deploy',
  description: 'Test, optimize and deploy the solution.'
}];


export const sections = [
{ id: 'home', label: 'Home' },
{ id: 'about', label: 'About' },
{ id: 'skills', label: 'Skills' },
{ id: 'experience', label: 'Experience' },
{ id: 'projects', label: 'Projects' },
{ id: 'contact', label: 'Contact' }] as
const;