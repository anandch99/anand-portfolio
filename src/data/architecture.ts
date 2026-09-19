export interface ArchitectureDiagram {
  id: string;
  title: string;
  steps: string[];
}

export const architectureDiagrams: ArchitectureDiagram[] = [
  {
    id: 'api',
    title: 'Enterprise API Architecture',
    steps: [
      'React',
      'ASP.NET Core',
      'Application Layer',
      'Domain',
      'Infrastructure',
      'PostgreSQL',
    ],
  },
  {
    id: 'rag',
    title: 'RAG Architecture',
    steps: ['Documents', 'Chunking', 'Embedding', 'Vector Database', 'Retrieval', 'LLM'],
  },
  {
    id: 'observability',
    title: 'Observability Architecture',
    steps: [
      'Application',
      'OpenTelemetry',
      'Telemetry',
      'Metrics / Traces',
      'Monitoring Platform',
      'Dashboard',
    ],
  },
  {
    id: 'async',
    title: 'Asynchronous Architecture',
    steps: ['API', 'RabbitMQ', 'Consumer', 'Background Processing', 'Database'],
  },
];

export interface ObservabilityConcept {
  term: string;
  question: string;
}

export const observabilityConcepts: ObservabilityConcept[] = [
  { term: 'Metrics', question: 'What is happening?' },
  { term: 'Traces', question: 'Where did an individual request go?' },
  { term: 'Logs', question: 'What detailed event occurred?' },
];

export const applicationMetrics = [
  'Request count',
  'Error rate',
  'Success rate',
  'Response time',
  'P50',
  'P95',
  'P99',
  'Throughput',
];

export const serverMetrics = ['CPU', 'Memory', 'Disk', 'Network', 'Disk I/O'];

export const tracingConcepts = ['Trace', 'Span', 'TraceId', 'SpanId', 'Distributed tracing'];

export interface EngineeringFlow {
  id: string;
  title: string;
  steps: string[];
}

export const engineeringFlows: EngineeringFlow[] = [
  {
    id: 'performance',
    title: 'Performance',
    steps: [
      'Problem',
      'Analyze query',
      'Execution plan',
      'Identify bottleneck',
      'Index/query optimization',
      'Measure improvement',
    ],
  },
  {
    id: 'async',
    title: 'Asynchronous Processing',
    steps: ['API', 'Message broker', 'Queue', 'Consumer', 'Background processing', 'Result'],
  },
  {
    id: 'observability',
    title: 'Observability',
    steps: ['Metric → Detect issue', 'Trace → Locate issue', 'Log → Investigate event'],
  },
  {
    id: 'ai-rag',
    title: 'AI/RAG',
    steps: ['Document', 'Embedding', 'Retrieval', 'Context', 'LLM', 'Grounded answer'],
  },
];
