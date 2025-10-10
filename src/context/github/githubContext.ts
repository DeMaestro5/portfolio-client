import { createContext } from 'react';
import type { GithubContextValue } from '../../types/Github/context';

// Keep the context in a non-TSX file to avoid Fast Refresh warnings
export const GithubContext = createContext<GithubContextValue | undefined>(
  undefined
);
