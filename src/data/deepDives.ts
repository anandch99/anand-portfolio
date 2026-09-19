export interface DeepDive {
  id: string;
  title: string;
  summary: string;
}

export const deepDives: DeepDive[] = [
  {
    id: 'rag-aspnet-pgvector',
    title: 'Building RAG with ASP.NET Core and pgvector',
    summary:
      'How document ingestion, chunking, embeddings and vector similarity search combine with ASP.NET Core to power grounded LLM answers.',
  },
  {
    id: 'opentelemetry-api-monitoring',
    title: 'Understanding OpenTelemetry in API Monitoring',
    summary:
      'Instrumenting APIs with OpenTelemetry to capture metrics and traces for centralized observability platforms.',
  },
  {
    id: 'metrics-traces-logs',
    title: 'Metrics vs Traces vs Logs',
    summary:
      'A practical breakdown of the three observability signals and when each one is the right tool for diagnosis.',
  },
  {
    id: 'postgresql-query-optimization',
    title: 'PostgreSQL Query Optimization',
    summary:
      'Execution plans, indexing strategies and materialized views used to reduce database response times in production workloads.',
  },
  {
    id: 'rabbitmq-async-processing',
    title: 'RabbitMQ Asynchronous Processing',
    summary:
      'Designing producer/consumer workflows with RabbitMQ to decouple APIs from long-running background work.',
  },
  {
    id: 'enterprise-monitoring-platforms',
    title: 'Designing Enterprise Monitoring Platforms',
    summary:
      'Architectural decisions behind building a centralized platform for application, API and server observability.',
  },
  {
    id: 'aspnet-core-enterprise-architecture',
    title: 'ASP.NET Core Enterprise API Architecture',
    summary:
      'Applying Clean Architecture, SOLID and domain-driven layering to enterprise-grade ASP.NET Core APIs.',
  },
];
