export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets?: string[];
  emphasis?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Technowell',
    role: 'Technical Team Lead / Senior .NET Backend Engineer',
    period: 'Feb 2022 – Present',
    location: 'Hyderabad, India',
    emphasis: true,
    bullets: [
      'Lead a 9-member frontend and backend engineering team, providing technical guidance, mentoring and delivery ownership.',
      'Design and develop enterprise-grade REST APIs using C# and ASP.NET Core with PostgreSQL and Entity Framework Core.',
      'Develop full-stack enterprise applications using ASP.NET Core and React/TypeScript.',
      'Conduct code reviews, technical design discussions, sprint planning and production deployments.',
      'Implement JWT authentication and role-based authorization.',
      'Optimize PostgreSQL queries and indexing strategies, achieving approximately 30–40% improvement in database response times in relevant workloads.',
      'Design and integrate RabbitMQ-based asynchronous processing, handling approximately 500 messages/day in relevant workflows.',
      'Collaborate with clients, stakeholders and cross-functional teams.',
      'Develop AI-powered applications using RAG, OpenAI APIs, Ollama and pgvector.',
      'Develop an enterprise monitoring platform using OpenTelemetry.',
    ],
  },
  {
    company: 'SEC Industries Pvt. Ltd.',
    role: 'Junior Engineer',
    period: 'Dec 2020 – Feb 2022',
  },
  {
    company: 'VGR Technology Centre',
    role: 'Engineer',
    period: 'Nov 2019 – Nov 2020',
  },
  {
    company: 'IVK Manuport Logistics',
    role: 'Executive – Project Operations',
    period: 'Apr 2019 – Oct 2019',
  },
  {
    company: 'SAS International Marine Services LLC',
    role: 'Executive – Project Operations',
    period: 'Jan 2017 – Mar 2019',
  },
];
