import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { createServer } from 'http';

console.log('OpenTelemetry config loaded');
export const prometheusExporter = new PrometheusExporter({
  endpoint: '/metrics', // Endpoint where Prometheus will fetch metrics
  startServer: true, // Start a Prometheus server in the React client
  server: createServer, // Use the correct createServer function
});
