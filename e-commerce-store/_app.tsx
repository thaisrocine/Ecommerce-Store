import { trace } from '@opentelemetry/api';
import provider from '../../Ecommerce-Store/e-commerce-store/infra/otel/otel-config';

// Ative o provedor de rastreamento
trace.setGlobalTracerProvider(provider);

function MyApp({ Component, pageProps }) {
    console.log(trace.setGlobalTracerProvider(provider));
  return <Component {...pageProps} />;
}

export default MyApp;
