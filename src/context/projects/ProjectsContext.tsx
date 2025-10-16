import { useCallback, useMemo, useState } from 'react';
import type { Project } from '../../types/Projects/Projects';
import type {
  ProjectsContextValue,
  ProjectsSlices,
} from '../../types/Projects/context';
import type { ResourceState } from '../../types/types';
import {
  isStale,
  makeInitialResource,
  setFailure,
  setSuccess,
  startLoading,
  toErrorMessage,
} from '../../components/helpers/context.helper';
import { projectsApi } from '../../lib/api';
import { ProjectsContext } from './projectContext';

const TTL_MS: Record<ProjectsSlices, number> = {
  projects: 600_000,
  featured: 600_000,
  search: 0,
  current: 60_000,
};

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<ResourceState<Project[]>>(
    makeInitialResource()
  );
  const [featured, setFeatured] = useState<ResourceState<Project[]>>(
    makeInitialResource()
  );
  const [projectById, setProjectById] = useState<ResourceState<Project>>(
    makeInitialResource()
  );

  const fetchProjects = useCallback(
    async (force = false) => {
      if (!force && !isStale(projects.lastFetched, TTL_MS.projects)) return;
      startLoading(setProjects);
      try {
        const { data } = await projectsApi.getProjects();
        setSuccess(setProjects, data as Project[]);
      } catch (error) {
        setFailure(setProjects, toErrorMessage(error));
      }
    },
    [projects.lastFetched]
  );

  const fetchFeaturedProjects = useCallback(
    async (force = false) => {
      if (!force && !isStale(featured.lastFetched, TTL_MS.featured)) return;
      try {
        const { data } = await projectsApi.getFeaturedProjects();
        setSuccess(setFeatured, data as Project[]);
      } catch (error) {
        setFailure(setFeatured, toErrorMessage(error));
      }
    },
    [featured.lastFetched]
  );

  const fetchProjectsByLanguage = useCallback(
    async (language: string): Promise<Project[]> => {
      const { data } = await projectsApi.getProjectsByLanguage(language);
      return data as Project[];
    },
    []
  );

  const fetchSearch = useCallback(async (query: string): Promise<Project[]> => {
    const { data } = await projectsApi.searchProjects(query);
    return data as Project[];
  }, []);

  const fetchProjectById = useCallback(async (id: number): Promise<Project> => {
    startLoading(setProjectById);
    try {
      const { data } = await projectsApi.getProjectById(id);
      setSuccess(setProjectById, data);
      return data;
    } catch (error) {
      setFailure(setProjectById, toErrorMessage(error));
    }
    const { data } = await projectsApi.getProjectById(id);
    setSuccess(setProjectById, data);
    return data;
  }, []);

  const values = useMemo<ProjectsContextValue>(
    () => ({
      state: {
        projects,
        featured,
        projectById,
      },
      fetchProjects,
      fetchFeaturedProjects,
      fetchProjectsByLanguage,
      fetchSearch,
      fetchProjectById,
    }),
    [
      projects,
      featured,
      projectById,
      fetchProjects,
      fetchFeaturedProjects,
      fetchProjectsByLanguage,
      fetchSearch,
      fetchProjectById,
    ]
  );

  return (
    <ProjectsContext.Provider value={values}>
      {children}
    </ProjectsContext.Provider>
  );
}
