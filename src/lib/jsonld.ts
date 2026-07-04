interface JobEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

interface ProjectEntry {
  name: string;
  description: string;
  link: string;
  tech: string[];
}

interface EduEntry {
  degree: string;
  school: string;
  period: string;
}

interface CertEntry {
  name: string;
  issuer: string;
  date: string;
}

interface CvState {
  profile: {
    name?: string;
    role?: string;
    summary?: string;
    location?: string;
    phone?: string;
    email?: string;
    github?: string;
    linkedin?: string;
    photo?: string;
  };
  featuredSkills: string[];
  skills: Record<string, string[]> | { category: string; items: string[] }[];
  softSkills: string[];
  achievements: string[];
  education: EduEntry[];
  certifications: CertEntry[];
  experience: JobEntry[];
  projects: ProjectEntry[];
}

function skillsToFlatList(skills: CvState['skills']): string[] {
  const values = Array.isArray(skills) ? skills.map((s) => s.items) : Object.values(skills);
  return [...new Set(values.flat())];
}

export function buildJsonLd(state: CvState) {
  const p = state.profile || {};

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name || undefined,
    jobTitle: p.role || undefined,
    description: p.summary || undefined,
    email: p.email || undefined,
    telephone: p.phone || undefined,
    image: p.photo || undefined,
    address: p.location ? { '@type': 'PostalAddress', addressLocality: p.location } : undefined,
    sameAs: [p.github, p.linkedin].filter(Boolean),
    knowsAbout: [...new Set([...(state.featuredSkills || []), ...skillsToFlatList(state.skills || {})])],
    award: state.achievements || undefined,
    alumniOf: (state.education || [])
      .filter((e) => e.school || e.degree)
      .map((e) => ({
        '@type': 'EducationalOrganization',
        name: e.school || undefined,
        description: [e.degree, e.period].filter(Boolean).join(' — ') || undefined,
      })),
    hasCredential: (state.certifications || [])
      .filter((c) => c.name)
      .map((c) => ({
        '@type': 'EducationalOccupationalCredential',
        name: c.name,
        recognizedBy: c.issuer ? { '@type': 'Organization', name: c.issuer } : undefined,
        dateCreated: c.date || undefined,
      })),
    hasOccupation: (state.experience || [])
      .filter((j) => j.role || j.company)
      .map((j) => ({
        '@type': 'Occupation',
        name: j.role || undefined,
        occupationalCategory: j.company || undefined,
        description: j.description || undefined,
        skills: (j.tech || []).join(', ') || undefined,
        estimatedDuration: j.period || undefined,
      })),
    workExample: (state.projects || [])
      .filter((pr) => pr.name)
      .map((pr) => ({
        '@type': 'CreativeWork',
        name: pr.name,
        description: pr.description || undefined,
        url: pr.link || undefined,
        keywords: (pr.tech || []).join(', ') || undefined,
      })),
  };
}
