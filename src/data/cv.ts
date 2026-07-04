export const profile = {
  name: 'David Blancas Labastida',
  // Ruta a la foto (colócala en public/, ej. '/curriculum-vitae/photo.jpg'). Vacío = sin foto.
  photo: '',
  role: 'Full Stack Developer',
  summary:
    'Desarrollador Full Stack con 5+ años construyendo y modernizando sistemas críticos, desde migraciones de aplicaciones legacy (JSF, Oracle Forms) hasta microservicios con Spring Boot y Angular. Especializado en Java, TypeScript y PL/SQL, con experiencia end-to-end: diseño, backend, frontend e integración de APIs.',
  location: 'México',
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
  'Microservicios',
  'APIs REST',
];

export const skills = {
  'Lenguajes / Frameworks / Librerías': ['Java (8+)', 'Java EE', 'Spring Boot', 'TypeScript', 'C#', 'Angular', 'Python'],
  'DBMS / IDE': ['MySQL', 'PostgreSQL', 'SQL Server', 'PL/SQL', 'IntelliJ IDEA', 'PyCharm', 'Eclipse'],
  'Herramientas': ['Git', 'SVN', 'GitHub', 'GitLab', 'pytest', 'JUnit', 'Docker', 'Jenkins'],
  'Metodologías / Arquitecturas': ['SCRUM', 'Microservicios', 'Patrones de diseño', 'APIs REST'],
  'Servidores y SO': ['Nginx', 'Linux', 'Windows'],
  'Idiomas': ['Español (nativo)', 'Inglés (B1)'],
};

export const softSkills = [
  'Comunicación efectiva',
  'Trabajo en equipo',
  'Adaptabilidad',
  'Pensamiento crítico y resolución de problemas',
  'Gestión de tiempo',
  'Aprendizaje continuo y curiosidad',
];

export const achievements = [
  'Modernicé sistemas gubernamentales críticos, migrando lógica backend de JavaServer Faces a Spring Boot + Angular.',
  'Diseñé e implementé microservicios con Spring Boot, mejorando tiempos de respuesta y escalabilidad.',
  'Reduje el costo de consultas de negocio optimizando vistas y procedimientos en PL/SQL.',
  'Automaticé procesos repetitivos con scripts en Python, elevando la eficiencia operativa un 25%.',
  'Lideré migraciones de plataforma (Oracle Forms → Oracle JET, reportes a Java) sin interrumpir la operación productiva.',
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
      'Participo en la modernización y migración de una aplicación empresarial legacy desarrollada en JavaServer Faces (JSF) hacia una arquitectura basada en Spring Boot y Angular. Desarrollo backend con Java y Spring, e implementación/mantenimiento de componentes frontend con Angular. Colaboro en APIs REST, integración entre sistemas, lógica de negocio y mantenimiento evolutivo de módulos críticos.',
    highlights: [
      'Backend Java/Spring Boot para módulos críticos migrados desde JSF.',
      'Componentes frontend en Angular + TypeScript, consumiendo APIs REST propias.',
      'Análisis técnico de requerimientos y resolución de incidencias en producción.',
      'Trabajo bajo SCRUM con equipos multidisciplinarios.',
    ],
    tech: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'REST', 'Git', 'SCRUM'],
  },
  {
    company: 'MTI Consultoría',
    role: 'Programador',
    period: 'Febrero 2022 – Febrero 2026',
    description:
      'Diseño, desarrollo y mantenimiento de aplicaciones full stack. Backend con JavaScript y PL/SQL, consultas y procedimientos almacenados optimizados. Frontend con TypeScript y HTML. Integración de APIs REST. Gestión de versiones con GitLab y SVN. Migración de Oracle Forms a Oracle JET y de Oracle Reports a Java.',
    highlights: [
      'Frontend en TypeScript/HTML; backend en JavaScript con lógica de negocio en PL/SQL.',
      'Optimización de procedimientos almacenados y vistas en PL/SQL.',
      'Migración de Oracle Forms a Oracle JET y de Oracle Reports a Java.',
      'Pruebas unitarias y control de versiones con GitLab/SVN.',
    ],
    tech: ['JavaScript', 'TypeScript', 'PL/SQL', 'GitLab', 'SVN'],
  },
  {
    company: 'Nubelity LLC',
    role: 'Programador Java Jr.',
    period: 'Enero 2021 – Diciembre 2021',
    description:
      'Desarrollo backend y frontend para diversos clientes, implementación de microservicios y uso avanzado de GitHub. Trabajo en proyectos de gran escala manteniendo funcionalidades críticas.',
    highlights: [
      'Automaticé tareas repetitivas con Python, mejorando la eficiencia operativa un 25%.',
      'Desarrollo backend/frontend multi-cliente: PL/SQL, C#, Java, HTML, Ruby on Rails, Angular.',
      'Administración de control de versiones (Git/SVN) en proyectos distribuidos.',
    ],
    tech: ['Java', 'PL/SQL', 'C#', 'HTML', 'TypeScript', 'Python', 'JUnit'],
  },
  {
    company: 'Apsi',
    role: 'Desarrollador Full Stack',
    period: 'Enero 2020 – Enero 2021',
    description:
      'Capacitación para migración de aplicaciones e implementación de buenas prácticas. Manejo de versiones y ramas en proyectos colaborativos. Desarrollo con PL/SQL y C# para gestión de datos.',
    highlights: [
      'Capacitación en migración de aplicaciones y buenas prácticas de desarrollo.',
      'Desarrollo en PL/SQL y C# para gestión de datos de cliente.',
      'Manejo de ramas y versiones en proyectos colaborativos (Git/SVN).',
    ],
    tech: ['Java', 'PL/SQL', 'C#', 'HTML', 'TypeScript'],
  },
];

export const projects = [
  {
    name: 'Proyecto Uno',
    description: 'Descripción corta del proyecto: qué problema resuelve y con qué stack se construyó.',
    link: 'https://github.com/David7u79',
    tech: ['TypeScript', 'Astro'],
  },
  {
    name: 'Proyecto Dos',
    description: 'Descripción corta del proyecto: qué problema resuelve y con qué stack se construyó.',
    link: 'https://github.com/David7u79',
    tech: ['Java', 'Spring Boot'],
  },
  {
    name: 'Proyecto Tres',
    description: 'Descripción corta del proyecto: qué problema resuelve y con qué stack se construyó.',
    link: 'https://github.com/David7u79',
    tech: ['Python'],
  },
];
