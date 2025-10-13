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
