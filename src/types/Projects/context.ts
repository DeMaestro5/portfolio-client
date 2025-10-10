import type { ResourceState } from '../types';
import type { Project } from './Projects';

export type ProjectsSlices = 'projects' | 'featured' | 'search' | 'current';
export type ProjectsContextValue = {
  state: {
    projects: ResourceState<Project[]>;
    featured: ResourceState<Project[]>;
  };
  fetchProjects: (force?: boolean) => Promise<void>;
  fetchFeaturedProjects: (force?: boolean) => Promise<void>;
  searchProjects?: (query: string) => Promise<void>;
  fetchProjectsByLanguage: (language: string) => Promise<Project[]>;
  fetchProjectById: (id: number) => Promise<Project | null>;
};
