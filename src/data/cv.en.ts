export const profile = {
  name: 'David Blancas Labastida',
  // Path to photo (place it in public/, e.g. '/curriculum-vitae/photo.jpg'). Empty = no photo.
  photo: '',
  role: 'Full Stack Developer',
  summary:
    'Full Stack Developer with 5+ years building and modernizing critical systems, from legacy application migrations (JSF, Oracle Forms) to microservices with Spring Boot and Angular. Specialized in Java, TypeScript and PL/SQL, with end-to-end experience: design, backend, frontend and API integration.',
  location: 'Mexico',
  phone: '+52 749 850 71 64',
  email: 'david.blancas.labastida@hotmail.com',
  github: 'https://github.com/David7u79',
  linkedin: 'https://www.linkedin.com/in/david-blancas-labastida-7u7/',
};

export const featuredSkills = [
  'Java',
  'Spring Boot',
  'TypeScript',
  'Angular',
  'PL/SQL',
  'Python',
  'Microservices',
  'REST APIs',
];

export const skills = {
  'Languages / Frameworks / Libraries': ['Java (8+)', 'Java EE', 'Spring Boot', 'TypeScript', 'C#', 'Angular', 'Python'],
  'DBMS / IDE': ['MySQL', 'PostgreSQL', 'SQL Server', 'PL/SQL', 'IntelliJ IDEA', 'PyCharm', 'Eclipse'],
  'Tools': ['Git', 'SVN', 'GitHub', 'GitLab', 'pytest', 'JUnit', 'Docker', 'Jenkins'],
  'Methodologies / Architectures': ['SCRUM', 'Microservices', 'Design patterns', 'REST APIs'],
  'Servers and OS': ['Nginx', 'Linux', 'Windows'],
  'Languages': ['Spanish (native)', 'English (B1)'],
};

export const softSkills = [
  'Effective communication',
  'Teamwork',
  'Adaptability',
  'Critical thinking and problem solving',
  'Time management',
  'Continuous learning and curiosity',
];

export const achievements = [
  'Modernized critical government systems, migrating backend logic from JavaServer Faces to Spring Boot + Angular.',
  'Designed and implemented microservices with Spring Boot, improving response times and scalability.',
  'Reduced business query cost by optimizing views and procedures in PL/SQL.',
  'Automated repetitive processes with Python scripts, raising operational efficiency by 25%.',
  'Led platform migrations (Oracle Forms -> Oracle JET, reports to Java) without interrupting production operations.',
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
      'Participating in the modernization and migration of a legacy enterprise application built in JavaServer Faces (JSF) to an architecture based on Spring Boot and Angular. Backend development with Java and Spring, plus implementation/maintenance of Angular frontend components. Collaborating on REST APIs, system integration, business logic and evolutive maintenance of critical modules.',
    highlights: [
      'Java/Spring Boot backend for critical modules migrated from JSF.',
      'Angular + TypeScript frontend components, consuming in-house REST APIs.',
      'Technical requirements analysis and production incident resolution.',
      'Working under SCRUM with multidisciplinary teams.',
    ],
    tech: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'REST', 'Git', 'SCRUM'],
  },
  {
    company: 'MTI Consultoría',
    role: 'Programmer',
    period: 'February 2022 – February 2026',
    description:
      'Design, development and maintenance of full stack applications. Backend with JavaScript and PL/SQL, optimized queries and stored procedures. Frontend with TypeScript and HTML. REST API integration. Version control with GitLab and SVN. Migration from Oracle Forms to Oracle JET and from Oracle Reports to Java.',
    highlights: [
      'TypeScript/HTML frontend; JavaScript backend with business logic in PL/SQL.',
      'Optimization of stored procedures and views in PL/SQL.',
      'Migration from Oracle Forms to Oracle JET and from Oracle Reports to Java.',
      'Unit testing and version control with GitLab/SVN.',
    ],
    tech: ['JavaScript', 'TypeScript', 'PL/SQL', 'GitLab', 'SVN'],
  },
  {
    company: 'Nubelity LLC',
    role: 'Jr. Java Programmer',
    period: 'January 2021 – December 2021',
    description:
      'Backend and frontend development for multiple clients, microservices implementation and advanced GitHub usage. Work on large-scale projects while maintaining critical functionality.',
    highlights: [
      'Automated repetitive tasks with Python, improving operational efficiency by 25%.',
      'Multi-client backend/frontend development: PL/SQL, C#, Java, HTML, Ruby on Rails, Angular.',
      'Version control management (Git/SVN) on distributed projects.',
    ],
    tech: ['Java', 'PL/SQL', 'C#', 'HTML', 'TypeScript', 'Python', 'JUnit'],
  },
  {
    company: 'Apsi',
    role: 'Full Stack Developer',
    period: 'January 2020 – January 2021',
    description:
      'Training on application migration and best practices implementation. Branch and version management on collaborative projects. Development with PL/SQL and C# for data management.',
    highlights: [
      'Training on application migration and development best practices.',
      'Development in PL/SQL and C# for client data management.',
      'Branch and version management on collaborative projects (Git/SVN).',
    ],
    tech: ['Java', 'PL/SQL', 'C#', 'HTML', 'TypeScript'],
  },
];

export const projects = [
  {
    name: 'Project One',
    description: 'Short project description: what problem it solves and what stack it was built with.',
    link: 'https://github.com/David7u79',
    tech: ['TypeScript', 'Astro'],
  },
  {
    name: 'Project Two',
    description: 'Short project description: what problem it solves and what stack it was built with.',
    link: 'https://github.com/David7u79',
    tech: ['Java', 'Spring Boot'],
  },
  {
    name: 'Project Three',
    description: 'Short project description: what problem it solves and what stack it was built with.',
    link: 'https://github.com/David7u79',
    tech: ['Python'],
  },
];
