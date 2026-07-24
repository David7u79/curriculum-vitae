export const profile = {
  name: 'David Blancas Labastida',
  // Path to photo (place it in public/, e.g. '/curriculum-vitae/photo.jpg'). Empty = no photo.
  photo: '',
  role: 'Full Stack Developer | Java & Application Security (IAM/SSO)',
  summary:
    'Full Stack Developer focused on system modernization, secure APIs and legacy migrations. Specialized in Java, Spring Boot, Angular and centralized authentication with OAuth 2.0/OIDC, JWT and Okta.',
  location: 'Mexico',
  phone: '+52 749 850 71 64',
  email: 'david.blancas.labastida@hotmail.com',
  github: 'https://github.com/David7u79',
  linkedin: 'https://www.linkedin.com/in/david-blancas-labastida-7u7/',
};

export const featuredSkills = [
  'Java',
  'Spring Boot',
  'Spring Security',
  'Angular',
  'TypeScript',
  'Okta',
  'OAuth 2.0 / OIDC',
  'JWT / SSO',
];

export const skills = {
  'Backend and frontend': ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'TypeScript', 'Python'],
  'Security and IAM': ['Okta', 'OAuth 2.0', 'OpenID Connect', 'JWT', 'SSO', 'MFA', 'RBAC'],
  'Data and tooling': ['PL/SQL', 'PostgreSQL', 'MySQL', 'Git', 'GitHub', 'GitLab', 'Docker', 'JUnit'],
  'Ways of working': ['SCRUM', 'Microservices', 'REST APIs', 'Legacy modernization'],
  'Languages': ['Spanish (native)', 'English (B1)'],
};

export const softSkills = [
  'Clear communication',
  'Problem solving',
  'Teamwork',
];

export const achievements = [
  'Implemented SSO and MFA with Okta to strengthen and unify access across internal applications.',
  'Contributed to legacy migrations to Spring Boot + Angular without disrupting operations.',
  'Automated repetitive processes with Python, improving operational efficiency by 25%.',
  'Optimized PL/SQL queries and procedures to improve response times.',
];

export const education = [
  {
    degree: 'B.Eng. in Systems Engineering',
    school: 'Universidad Autónoma de Tlaxcala, Campus Calpulalpan',
    period: '2018 – 2022',
  },
];

export const certifications = [
  { name: 'Advanced Java', issuer: 'Nubelity LLC', date: 'December 2023' },
  { name: 'Advanced Power BI', issuer: 'Nubelity LLC', date: 'December 2023' },
];

export const experience = [
  {
    company: 'Instituto Nacional Electoral',
    role: 'Software Development Professional',
    period: 'March 2026 – Present',
    description:
      'Modernization of a legacy application toward Spring Boot and Angular, with focus on security, integration and operational continuity.',
    highlights: [
      'Backend development with Java, Spring Boot and Spring Security for critical modules.',
      'Okta integration with OAuth 2.0/OIDC, JWT, SSO and MFA.',
      'Angular development and support for secure REST APIs.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Okta', 'OAuth 2.0', 'JWT', 'Angular', 'TypeScript'],
  },
  {
    company: 'MTI Consultoría',
    role: 'Programmer',
    period: 'January 2024 – February 2026',
    description:
      'Full stack development and maintenance with functional migrations and database optimization.',
    highlights: [
      'Frontend in TypeScript/HTML and backend in JavaScript with PL/SQL business logic.',
      'Migration from Oracle Forms to Oracle JET and reports to Java.',
      'Centralized authentication with JWT, OAuth 2.0 and SSO.',
    ],
    tech: ['JavaScript', 'TypeScript', 'PL/SQL', 'OAuth 2.0', 'JWT', 'GitLab'],
  },
  {
    company: 'Nubelity LLC',
    role: 'Jr. Java Programmer',
    period: 'January 2023 – December 2023',
    description:
      'Backend and frontend development for multiple clients, including microservices and automation work.',
    highlights: [
      'Automated repetitive tasks with Python, improving operational efficiency by 25%.',
      'Spring Boot microservices secured with Spring Security and JWT.',
      'Third-party API integrations with OAuth 2.0.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'OAuth 2.0', 'JWT', 'Python'],
  },
  {
    company: 'Apsi',
    role: 'Full Stack Developer',
    period: 'January 2022 – January 2023',
    description:
      'Work on internal projects focused on best practices, access control and data management.',
    highlights: [
      'Implemented login and role-based access control.',
      'Development with PL/SQL and C# for data management.',
      'Worked with Git/SVN and development best practices.',
    ],
    tech: ['PL/SQL', 'C#', 'RBAC', 'Git'],
  },
];

export const projects = [
  {
    name: 'Interactive CV + Builder',
    description: 'Web CV with themes, PDF export and an in-browser editable builder.',
    link: 'https://David7u79.github.io/curriculum-vitae/',
    tech: ['TypeScript', 'Astro'],
  },
  {
    name: 'Secure API with Spring Security + Okta',
    description: 'REST API with OAuth 2.0/OIDC, JWT, MFA and SSO integrated with an Angular client.',
    link: 'https://github.com/David7u79',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'OAuth 2.0', 'OIDC', 'JWT', 'Okta', 'MFA', 'SSO', 'Angular'],
  },
];
