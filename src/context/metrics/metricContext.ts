import { createContext } from 'react';
import type { MetricsContextValue } from '../../types/Metrics/context';

// Keep the context in a non-TSX file to avoid Fast Refresh warnings
export const MetricsContext = createContext<MetricsContextValue | undefined>(
  undefined
);
