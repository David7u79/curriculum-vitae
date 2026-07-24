export const profile = {
  name: 'David Blancas Labastida',
  // Ruta a la foto (colócala en public/, ej. '/curriculum-vitae/photo.jpg'). Vacío = sin foto.
  photo: '',
  role: 'Full Stack Developer | Java & Seguridad de Aplicaciones (IAM/SSO)',
  summary:
    'Desarrollador Full Stack con experiencia en modernización de sistemas, APIs seguras y migraciones tecnológicas. Especializado en Java, Spring Boot, Angular y autenticación centralizada con OAuth 2.0/OIDC, JWT y Okta.',
  location: 'México',
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
  'Backend y frontend': ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'TypeScript', 'Python'],
  'Seguridad e IAM': ['Okta', 'OAuth 2.0', 'OpenID Connect', 'JWT', 'SSO', 'MFA', 'RBAC'],
  'Datos y herramientas': ['PL/SQL', 'PostgreSQL', 'MySQL', 'Git', 'GitHub', 'GitLab', 'Docker', 'JUnit'],
  'Trabajo y arquitectura': ['SCRUM', 'Microservicios', 'APIs REST', 'Migración de legacy'],
  'Idiomas': ['Español (nativo)', 'Inglés (B1)'],
};

export const softSkills = [
  'Comunicación clara',
  'Resolución de problemas',
  'Trabajo en equipo',
];

export const achievements = [
  'Implementé SSO y MFA con Okta para unificar y fortalecer el acceso a aplicaciones internas.',
  'Participé en migraciones de sistemas legacy a Spring Boot + Angular sin afectar la operación.',
  'Automaticé procesos con Python, mejorando la eficiencia operativa en 25%.',
  'Optimicé consultas y procedimientos en PL/SQL para reducir tiempos de respuesta.',
];

export const education = [
  {
    degree: 'Lic. en Ingeniería en Sistemas',
    school: 'Universidad Autónoma de Tlaxcala, Campus Calpulalpan',
    period: '2018 – 2022',
  },
];

export const certifications = [
  { name: 'Advanced Java', issuer: 'Nubelity LLC', date: 'Diciembre 2023' },
  { name: 'Advanced Power BI', issuer: 'Nubelity LLC', date: 'Diciembre 2023' },
];

export const experience = [
  {
    company: 'Instituto Nacional Electoral',
    role: 'Profesional en Desarrollo de Software',
    period: 'Marzo 2026 – Actual',
    description:
      'Modernización de una aplicación legacy hacia Spring Boot y Angular, con foco en seguridad, integración y continuidad operativa.',
    highlights: [
      'Desarrollo backend con Java, Spring Boot y Spring Security para módulos críticos.',
      'Integración de Okta con OAuth 2.0/OIDC, JWT, SSO y MFA.',
      'Desarrollo de componentes Angular y soporte a APIs REST seguras.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'Okta', 'OAuth 2.0', 'JWT', 'Angular', 'TypeScript'],
  },
  {
    company: 'MTI Consultoría',
    role: 'Programador',
    period: 'Enero 2024 – Febrero 2026',
    description:
      'Desarrollo y mantenimiento de aplicaciones full stack con migraciones funcionales y optimización de base de datos.',
    highlights: [
      'Frontend en TypeScript/HTML y backend con JavaScript y PL/SQL.',
      'Migración de Oracle Forms a Oracle JET y de reportes a Java.',
      'Integración de autenticación centralizada con JWT, OAuth 2.0 y SSO.',
    ],
    tech: ['JavaScript', 'TypeScript', 'PL/SQL', 'OAuth 2.0', 'JWT', 'GitLab'],
  },
  {
    company: 'Nubelity LLC',
    role: 'Programador Java Jr.',
    period: 'Enero 2023 – Diciembre 2023',
    description:
      'Desarrollo backend y frontend para distintos clientes, con participación en microservicios y automatización.',
    highlights: [
      'Automatización con Python que mejoró la eficiencia operativa en 25%.',
      'Microservicios en Spring Boot con Spring Security y JWT.',
      'Integración de APIs de terceros con OAuth 2.0.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'OAuth 2.0', 'JWT', 'Python'],
  },
  {
    company: 'Apsi',
    role: 'Desarrollador Full Stack',
    period: 'Enero 2022 – Enero 2023',
    description:
      'Participación en proyectos internos con enfoque en buenas prácticas, control de acceso y gestión de datos.',
    highlights: [
      'Implementación de login y control de acceso por roles.',
      'Desarrollo con PL/SQL y C# para gestión de datos.',
      'Trabajo con Git/SVN y buenas prácticas de desarrollo.',
    ],
    tech: ['PL/SQL', 'C#', 'RBAC', 'Git'],
  },
];

export const projects = [
  {
    name: 'CV Interactivo + Generador',
    description: 'CV web con temas, exportación a PDF y generador editable en navegador.',
    link: 'https://David7u79.github.io/curriculum-vitae/',
    tech: ['TypeScript', 'Astro'],
  },
  {
    name: 'API segura con Spring Security + Okta',
    description: 'API REST con OAuth 2.0/OIDC, JWT, MFA y SSO integrada con un cliente Angular.',
    link: 'https://github.com/David7u79',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'OAuth 2.0', 'OIDC', 'JWT', 'Okta', 'MFA', 'SSO', 'Angular'],
  },
];
