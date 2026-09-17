import type { EngineeringProject } from '../types';

/** Projects listed in the CV — presented separately from client-facing work. */
export const engineeringProjects: EngineeringProject[] = [
{
  id: 'unitum',
  title: 'Unitum Company Website',
  type: 'Corporate Web Solution',
  description:
  'Designed and developed the official corporate website for Unitum with a focus on modern UI/UX principles, mobile responsiveness and high-performance cloud deployment.'
},
{
  id: 'ems',
  title: 'Employee Management System',
  type: 'Internal Business Application',
  description:
  'Developed a comprehensive internal system for employee records, attendance and performance tracking using modern full-stack technologies.'
},
{
  id: 'adw',
  title: 'Autonomous Data Warehouse',
  technologies: ['Oracle ADW', 'Tableau'],
  description:
  'Architected a data warehouse to analyze restaurant datasets using interactive dashboards for decision-making.'
},
{
  id: 'juicy-hub',
  title: 'Juicy Hub',
  type: 'E-Commerce',
  technologies: ['PHP', 'JavaScript', 'Bootstrap'],
  description: 'Responsive e-commerce website.',
  features: ['Product listings', 'Shopping cart', 'User authentication', 'Admin panel']
},
{
  id: 'travel-companion',
  title: 'Travel Companion App',
  type: 'Mobile Application',
  technologies: ['Kotlin', 'Maps API'],
  description:
  'Mobile application providing destination suggestions and real-time navigation insights for travellers.'
}];