const { BasicTracerProvider, ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/tracing');
const { CollectorTraceExporter } = require('@opentelemetry/exporter-collector');

const provider = new BasicTracerProvider();

const exporter = new CollectorTraceExporter({
  serviceName: 'nextjs-app',
  url: 'http://loki:3100/loki/api/v1/push',
});

provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

provider.register();

module.exports = provider;
