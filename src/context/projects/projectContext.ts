import { createContext } from 'react';
import type { ProjectsContextValue } from '../../types/Projects/context';

// Keep the context in a non-TSX file to avoid Fast Refresh warnings
export const ProjectsContext = createContext<ProjectsContextValue | undefined>(
  undefined
);
