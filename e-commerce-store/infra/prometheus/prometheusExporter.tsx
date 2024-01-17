import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { createServer } from 'http';

export const createPrometheusExporter = (categoryId, productId) => {
  // explicar na daily que fiz um novo endpoint, pois o de antes estava bem esquisito 
  const endpoint = `localhost:3001`;

  const fullEndpoint = `http://${endpoint}`;

  return new PrometheusExporter({
    startServer: true,
    endpoint: fullEndpoint,
    server: createServer,
  });
};
