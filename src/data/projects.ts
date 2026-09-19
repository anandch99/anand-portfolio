export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technology: string[];
  capabilities?: string[];
  architecture?: string[];
  github?: string;
  flagship?: boolean;
}

export const eopProject: Project = {
  id: 'eop',
  name: 'EOP — Enterprise Observability Platform',
  tagline: 'Centralized monitoring for APIs, applications and infrastructure',
  description:
    'A centralized monitoring and observability platform designed to monitor APIs, applications and server infrastructure.',
  technology: [
    'ASP.NET Core',
    'PostgreSQL',
    'React',
    'TypeScript',
    'OpenTelemetry',
    'Docker',
    'REST APIs',
  ],
  capabilities: [
    'Application monitoring',
    'API monitoring',
    'Request tracking',
    'Error detection',
    'Response-time analysis',
    'Availability monitoring',
    'Metrics',
    'Distributed tracing',
    'Server performance monitoring',
    'Health monitoring',
    'Centralized dashboards',
    'Time-window analytics',
  ],
  architecture: [
    'Monitored Application',
    'OpenTelemetry',
    'Telemetry',
    'EOP Monitoring Backend',
    'Metrics / Traces',
    'PostgreSQL',
    'Dashboard',
  ],
  flagship: true,
};

export const ragProject: Project = {
  id: 'rag',
  name: 'Enterprise RAG-Based Document Search System',
  tagline: 'AI-powered document retrieval and question-answering',
  description:
    'An AI-powered document retrieval and question-answering platform combining document processing, embeddings, vector search and LLM generation.',
  technology: [
    'ASP.NET Core',
    'PostgreSQL',
    'pgvector',
    'Ollama',
    'Nomic Embeddings',
    'Llama',
    'OpenAI APIs',
    'React',
    'TypeScript',
  ],
  capabilities: [
    'Document ingestion',
    'Text chunking',
    'Embeddings',
    'Vector storage',
    'Semantic search',
    'Top-K retrieval',
    'Context construction',
    'LLM generation',
    'RAG',
    'Grounding',
    'Hallucination reduction concepts',
  ],
  architecture: [
    'PDF',
    'Text Extraction',
    'Chunking',
    'Embedding Generation',
    'PostgreSQL + pgvector',
    'Vector Similarity Search',
    'Top-K Context Retrieval',
    'Prompt Construction',
    'LLM Generation',
    'Answer',
  ],
  github: 'https://github.com/anandch99/Enterprise_RAG',
  flagship: true,
};

export const ragComponents = [
  {
    name: 'Ollama',
    description: 'Local LLM/model runtime.',
  },
  {
    name: 'Nomic Embeddings',
    description: 'Embedding model used to convert text into vectors.',
  },
  {
    name: 'Llama',
    description: 'LLM used for answer generation.',
  },
  {
    name: 'pgvector',
    description:
      'PostgreSQL extension used for vector storage and similarity search.',
  },
  {
    name: 'OpenAI',
    description: 'External LLM/API option where applicable.',
  },
];

export const otherProjects: Project[] = [
  {
    id: 'mmrda',
    name: 'MMRDA Complaint Management System',
    tagline: 'Enterprise workflow architecture for civic complaint handling',
    description:
      'A complaint registration and workflow management system with approval chains, escalations and notifications for enterprise stakeholders.',
    technology: ['ASP.NET Core', 'PostgreSQL', 'React', 'RabbitMQ'],
    capabilities: [
      'Complaint registration',
      'Approval workflows',
      'Escalations',
      'Notifications',
      'Reporting',
      'REST APIs',
      'RabbitMQ background processing',
      'PostgreSQL',
      'Enterprise workflow architecture',
    ],
  },
  {
    id: 'wemis',
    name: 'WEMIS / WEIS — Water & Environment Information Systems',
    tagline: 'Government digital transformation across multiple modules',
    description:
      'Enterprise and government application engineering for water and environment information management, spanning multiple functional modules: WASMIS, SANMIS, RUWAS, EMIS, FOMIS, PMS and WfP.',
    technology: ['ASP.NET Core', 'PostgreSQL', 'React'],
    capabilities: [
      'Backend services',
      'Secure REST APIs',
      'Reporting modules',
      'Workflow automation',
      'PostgreSQL',
      'Database optimization',
      'Data management',
      'Enterprise workflows',
      'Government digital transformation',
    ],
  },
  {
    id: 'elearning',
    name: 'E-Learning Platform',
    tagline: 'Course management and enrollment platform',
    description:
      'A full-stack e-learning platform covering course management, authentication, online payments and enrollment.',
    technology: ['ASP.NET Core', 'React', 'PostgreSQL'],
    capabilities: [
      'Course management',
      'Authentication',
      'Online payments',
      'Enrollment',
      'REST APIs',
    ],
  },
];
