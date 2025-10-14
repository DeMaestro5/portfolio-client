export type ResourceState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
};

export interface CardProps {
  data: {
    id: number;
    name: string;
    description: string | null;
    language: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    status?: string;
    technologies?: string[];
    featured?: boolean;
  };
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
