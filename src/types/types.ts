import type { Project } from './Projects/Projects';

export type ResourceState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
};

export interface KeyFeatures {
  feature: string;
  detail?: string;
}

export interface Commit {
  message: string;
  author: string;
  timestamp: string;
}

export interface RelatedProject {
  label: string;
  detail: string;
}

export interface CardProps {
  data: Project;
}

export interface ActivityCardProps {
  date: string;
  type:
    | 'project_created'
    | 'commit_milestone'
    | 'star_received'
    | 'fork_received'
    | 'activity_peak'
    | 'project_updated';
  project?: string;
  description: string;
  metadata?: {
    commits?: number;
    stars?: number;
    forks?: number;
    language?: string;
    size?: number;
  };
  live?: boolean;
}
