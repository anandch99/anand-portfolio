export interface Achievement {
  label: string;
}

export interface Metric {
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: '9-member team', label: 'Technical leadership' },
  { value: '100+ APIs', label: 'Enterprise REST APIs' },
  { value: '30–40%', label: 'Database performance improvement' },
  { value: '1,000+ users', label: 'Enterprise application usage' },
];

export const achievements: Achievement[] = [
  { label: 'Led a 9-member engineering team' },
  { label: 'Designed and developed 100+ secure REST APIs' },
  { label: 'Supported applications serving 1,000+ users' },
  {
    label:
      'Improved PostgreSQL query response times by approximately 30–40% through optimization and indexing',
  },
  { label: 'Implemented RabbitMQ-based asynchronous processing' },
  { label: 'Worked across approximately 15–20 production releases' },
  {
    label:
      'Built an AI-powered semantic document search system using RAG, Ollama, OpenAI and pgvector',
  },
  {
    label:
      'Delivered enterprise applications used across 7 government departments in Uganda',
  },
];
