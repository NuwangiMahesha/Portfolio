import type { Certification, EducationItem } from '../types';

export const education: EducationItem[] = [
{
  id: 'icbt-bsc',
  qualification: 'BSc (Hons) Software Engineering',
  institution: 'ICBT Campus',
  period: '11/2025 – Present',
  current: true
},
{
  id: 'nibm-hnd',
  qualification: 'HND in Software Engineering',
  institution: 'NIBM',
  period: '12/2021 – 09/2025'
},
{
  id: 'nibm-dip',
  qualification: 'Diploma in Software Engineering',
  institution: 'NIBM',
  period: '12/2021 – 08/2025'
},
{
  id: 'cipm-hrm',
  qualification: 'Diploma in HRM',
  institution: 'CIPM',
  period: '01/2020 – 06/2021'
}];


export const certifications: Certification[] = [
{
  id: 'cert-english',
  title: 'Advanced Certificate in English',
  institution: 'NIBM'
},
{
  id: 'cert-programming',
  title: 'Foundation in Programming',
  institution: 'NIBM'
}];