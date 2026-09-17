import type { SkillCategory, TechNode } from '../types';

export const skillCategories: SkillCategory[] = [
{
  id: 'cloud',
  label: 'Cloud & Hosting',
  caption: 'Deployment, hosting and managed services',
  skills: ['AWS', 'AWS Amplify', 'AWS Lambda', 'Railway', 'Netlify', 'Firebase']
},
{
  id: 'tools',
  label: 'Tools & Databases',
  caption: 'Version control, pipelines and data',
  skills: ['GitHub', 'Git', 'Azure DevOps', 'MySQL', 'PostgreSQL', 'MongoDB']
},
{
  id: 'languages',
  label: 'Languages & Development',
  caption: 'Application and interface engineering',
  skills: [
  'Java',
  'Kotlin',
  'PHP',
  'JavaScript',
  'C#',
  'React',
  'Spring Boot',
  '.NET',
  'Email Services']

}];


export const techNodes: TechNode[] = [
{ name: 'React', description: 'Component-driven interfaces and interactive front-ends.', group: 'framework' },
{ name: 'Java', description: 'Object-oriented application and backend development.', group: 'language' },
{ name: 'Spring Boot', description: 'Backend services, APIs and application structure.', group: 'framework' },
{ name: 'JavaScript', description: 'Interface behaviour and web application logic.', group: 'language' },
{ name: 'C#', description: 'Application development within the .NET ecosystem.', group: 'language' },
{ name: '.NET', description: 'Framework for building business applications and services.', group: 'framework' },
{ name: 'PHP', description: 'Server-side development for web platforms.', group: 'language' },
{ name: 'MySQL', description: 'Relational database design and querying.', group: 'data' },
{ name: 'PostgreSQL', description: 'Relational data modelling for application backends.', group: 'data' },
{ name: 'MongoDB', description: 'Document-based data storage for flexible schemas.', group: 'data' },
{ name: 'AWS', description: 'Cloud infrastructure, hosting and deployment services.', group: 'cloud' },
{ name: 'GitHub', description: 'Version control, collaboration and code review.', group: 'cloud' }];