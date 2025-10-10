import { useContext } from 'react';
import { MetricsContext } from './metricContext';

export function useMetrics() {
  const context = useContext(MetricsContext);
  if (!context) {
    throw new Error('useGithub must be used within a GithubProvider');
  }
  return context;
}
