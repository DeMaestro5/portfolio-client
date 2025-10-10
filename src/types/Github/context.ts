import type {
  GitHubActivity,
  GitHubEvents,
  GitHubOverview,
  GitHubProfile,
  GitHubRepository,
  GitHubStats,
} from './Github';
import type { ResourceState } from '../types';
export type GithubContextValue = {
  state: {
    profile: ResourceState<GitHubProfile>;
    overview: ResourceState<GitHubOverview>;
    activities: ResourceState<GitHubActivity[]>;
    repositories: ResourceState<GitHubRepository[]>;
    stats: ResourceState<GitHubStats>;
    events: ResourceState<GitHubEvents[]>;
  };

  fetchProfile: (force?: boolean) => Promise<void>;
  fetchOverview: (force?: boolean) => Promise<void>;
  fetchActivities: (force?: boolean) => Promise<void>;
  fetchRepositories: (force?: boolean) => Promise<void>;
  fetchStats: (force?: boolean) => Promise<void>;
  fetchEvents: (force?: boolean) => Promise<void>;

  fetchRepositoryByName: (
    name: string,
    force?: boolean
  ) => Promise<GitHubRepository | null>;
  sync: () => Promise<void>;
};

export type GithubSlices =
  | 'profile'
  | 'overview'
  | 'activities'
  | 'repositories'
  | 'stats'
  | 'events';
