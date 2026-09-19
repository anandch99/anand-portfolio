export interface SkillGroup {
  category: string;
  skills: { name: string; note?: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    skills: [
      { name: 'C#' },
      { name: 'ASP.NET Core' },
      { name: '.NET' },
      { name: 'ASP.NET Web API' },
      { name: 'Entity Framework Core' },
      { name: 'Dapper' },
      { name: 'REST APIs' },
      { name: 'JWT' },
      { name: 'Role-Based Authorization' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'SQL Server' },
      { name: 'SQL' },
      { name: 'Query Optimization' },
      { name: 'Indexing' },
      { name: 'Performance Tuning' },
      { name: 'Materialized Views' },
      { name: 'Database Design' },
      { name: 'pgvector' },
    ],
  },
  {
    category: 'Architecture',
    skills: [
      { name: 'Clean Architecture' },
      { name: 'SOLID' },
      { name: 'Microservices' },
      { name: 'Distributed Systems' },
      { name: 'Design Patterns' },
      { name: 'Event-Driven Architecture' },
    ],
  },
  {
    category: 'Messaging',
    skills: [
      { name: 'RabbitMQ' },
      { name: 'Worker Services' },
      { name: 'Asynchronous Processing' },
      { name: 'Kafka', note: 'Learning' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    category: 'AI',
    skills: [
      { name: 'RAG' },
      { name: 'Embeddings' },
      { name: 'Semantic Search' },
      { name: 'Vector Search' },
      { name: 'OpenAI APIs' },
      { name: 'Ollama' },
      { name: 'Nomic Embeddings' },
      { name: 'Llama' },
      { name: 'pgvector' },
    ],
  },
  {
    category: 'Observability',
    skills: [
      { name: 'OpenTelemetry' },
      { name: 'Metrics' },
      { name: 'Distributed Tracing' },
      { name: 'Application Monitoring' },
      { name: 'API Monitoring' },
      { name: 'Server Monitoring' },
      { name: 'Health Monitoring' },
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'IIS' },
      { name: 'CI/CD concepts' },
    ],
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'AWS', note: 'Working knowledge' },
      { name: 'Azure', note: 'Working knowledge' },
    ],
  },
];
