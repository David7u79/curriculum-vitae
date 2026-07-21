export const profile = {
  name: 'David Blancas Labastida',
  // Ruta a la foto (colócala en public/, ej. '/curriculum-vitae/photo.jpg'). Vacío = sin foto.
  photo: '',
  role: 'Full Stack Developer | Java & Seguridad de Aplicaciones (IAM/SSO)',
  summary:
    'Desarrollador Full Stack con 5+ años construyendo y modernizando sistemas críticos, desde migraciones de aplicaciones legacy (JSF, Oracle Forms) hasta microservicios con Spring Boot y Angular. Enfocado en seguridad de aplicaciones: autenticación y autorización con Spring Security, OAuth 2.0 / OpenID Connect, JWT, MFA y Single Sign-On (SSO) con Okta. Experiencia end-to-end: diseño, backend, frontend e integración segura de APIs.',
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
  'OAuth 2.0 / OIDC',
  'JWT',
  'Okta',
  'SSO',
  'MFA',
  'Angular',
  'TypeScript',
  'Microservicios',
  'APIs REST',
];

export const skills = {
  'Lenguajes / Frameworks / Librerías': ['Java (8+)', 'Java EE', 'Spring Boot', 'Spring Security', 'TypeScript', 'C#', 'Angular', 'Python'],
  'Seguridad / IAM': ['Okta', 'OAuth 2.0', 'OpenID Connect', 'JWT (JWS/JWK)', 'MFA', 'Single Sign-On (SSO)', 'SAML 2.0', 'RBAC', 'OWASP Top 10'],
  'DBMS / IDE': ['MySQL', 'PostgreSQL', 'SQL Server', 'PL/SQL', 'IntelliJ IDEA', 'PyCharm', 'Eclipse'],
  'Herramientas': ['Git', 'SVN', 'GitHub', 'GitLab', 'pytest', 'JUnit', 'Docker', 'Jenkins'],
  'Metodologías / Arquitecturas': ['SCRUM', 'Microservicios', 'Patrones de diseño', 'APIs REST', 'Arquitectura Zero Trust', 'Autenticación centralizada (SSO)'],
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
  'Modernicé sistemas gubernamentales críticos, migrando lógica backend de JavaServer Faces a Spring Boot + Angular con seguridad centralizada en Spring Security.',
  'Implementé Single Sign-On (SSO) con Okta como proveedor de identidad (OIDC/SAML), unificando el acceso a múltiples aplicaciones internas.',
  'Sustituí autenticación por sesión con un esquema stateless de tokens JWT firmados y refresh tokens sobre OAuth 2.0.',
  'Habilité MFA para perfiles administrativos mediante políticas de Okta, reduciendo el riesgo de accesos no autorizados.',
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
      'Participo en la modernización y migración de una aplicación empresarial legacy desarrollada en JavaServer Faces (JSF) hacia una arquitectura basada en Spring Boot y Angular, con autenticación y autorización centralizadas en Spring Security, OAuth 2.0/OIDC y JWT, e integración de Single Sign-On (SSO) y MFA con Okta. Desarrollo backend con Java y Spring, e implementación/mantenimiento de componentes frontend con Angular. Colaboro en APIs REST seguras, integración entre sistemas, lógica de negocio y mantenimiento evolutivo de módulos críticos.',
    highlights: [
      'Backend Java/Spring Boot para módulos críticos migrados desde JSF, con Spring Security como capa de autenticación y autorización.',
      'Integración de Okta como proveedor de identidad (OIDC): SSO entre aplicaciones y MFA para perfiles privilegiados.',
      'APIs REST protegidas con OAuth 2.0 y validación de JWT (firma, expiración, claims y scopes) en el resource server.',
      'Autorización basada en roles (RBAC) con anotaciones de método y filtros de Spring Security; guards e interceptores en Angular para el manejo de tokens.',
      'Componentes frontend en Angular + TypeScript, consumiendo APIs REST propias.',
      'Análisis técnico de requerimientos y resolución de incidencias en producción.',
      'Trabajo bajo SCRUM con equipos multidisciplinarios.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'OAuth 2.0', 'OIDC', 'JWT', 'Okta', 'SSO', 'MFA', 'Angular', 'TypeScript', 'REST', 'Git', 'SCRUM'],
  },
  {
    company: 'MTI Consultoría',
    role: 'Programador',
    period: 'Enero 2024 – Febrero 2026',
    description:
      'Diseño, desarrollo y mantenimiento de aplicaciones full stack. Backend con JavaScript y PL/SQL, consultas y procedimientos almacenados optimizados. Frontend con TypeScript y HTML. Integración de APIs REST. Gestión de versiones con GitLab y SVN. Migración de Oracle Forms a Oracle JET y de Oracle Reports a Java.',
    highlights: [
      'Frontend en TypeScript/HTML; backend en JavaScript con lógica de negocio en PL/SQL.',
      'Autenticación de las aplicaciones migradas mediante tokens JWT y flujos OAuth 2.0 contra el proveedor de identidad corporativo.',
      'Unificación del acceso con SSO, eliminando credenciales locales por aplicación y centralizando el ciclo de vida de usuarios.',
      'Optimización de procedimientos almacenados y vistas en PL/SQL.',
      'Migración de Oracle Forms a Oracle JET y de Oracle Reports a Java.',
      'Pruebas unitarias y control de versiones con GitLab/SVN.',
    ],
    tech: ['JavaScript', 'TypeScript', 'PL/SQL', 'OAuth 2.0', 'JWT', 'SSO', 'GitLab', 'SVN'],
  },
  {
    company: 'Nubelity LLC',
    role: 'Programador Java Jr.',
    period: 'Enero 2023 – Diciembre 2023',
    description:
      'Desarrollo backend y frontend para diversos clientes, implementación de microservicios y uso avanzado de GitHub. Trabajo en proyectos de gran escala manteniendo funcionalidades críticas.',
    highlights: [
      'Automaticé tareas repetitivas con Python, mejorando la eficiencia operativa un 25%.',
      'Microservicios en Spring Boot asegurados con Spring Security y validación de JWT entre servicios.',
      'Consumo de APIs de terceros con OAuth 2.0 (client credentials y authorization code).',
      'Desarrollo backend/frontend multi-cliente: PL/SQL, C#, Java, HTML, Ruby on Rails, Angular.',
      'Administración de control de versiones (Git/SVN) en proyectos distribuidos.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'OAuth 2.0', 'JWT', 'PL/SQL', 'C#', 'HTML', 'TypeScript', 'Python', 'JUnit'],
  },
  {
    company: 'Apsi',
    role: 'Desarrollador Full Stack',
    period: 'Enero 2022 – Enero 2023',
    description:
      'Capacitación para migración de aplicaciones e implementación de buenas prácticas. Manejo de versiones y ramas en proyectos colaborativos. Desarrollo con PL/SQL y C# para gestión de datos.',
    highlights: [
      'Capacitación en migración de aplicaciones y buenas prácticas de desarrollo y seguridad (OWASP Top 10).',
      'Implementación de login y control de acceso por roles en aplicaciones internas.',
      'Desarrollo en PL/SQL y C# para gestión de datos de cliente.',
      'Manejo de ramas y versiones en proyectos colaborativos (Git/SVN).',
    ],
    tech: ['Java', 'PL/SQL', 'C#', 'HTML', 'TypeScript', 'RBAC', 'OWASP'],
  },
];

export const projects = [
  {
    name: 'CV Interactivo + Generador',
    description: 'Este mismo sitio: CV como página web con temas intercambiables, exportación a PDF, datos estructurados (JSON-LD) y un generador para que cualquiera cree el suyo, todo guardado en el navegador.',
    link: 'https://David7u79.github.io/curriculum-vitae/',
    tech: ['TypeScript', 'Astro'],
  },
  {
    name: 'API segura con Spring Security + Okta',
    description: 'API REST en Spring Boot protegida como resource server OAuth 2.0: login vía Okta (OIDC), validación de JWT, refresh tokens, MFA y autorización por roles/scopes; SSO compartido con un cliente Angular.',
    link: 'https://github.com/David7u79',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'OAuth 2.0', 'OIDC', 'JWT', 'Okta', 'MFA', 'SSO', 'Angular'],
  },
];
