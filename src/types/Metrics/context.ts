import type {
  LanguageMetricsResponse,
  ActivityMetric,
  RepositorySummary,
  ContributionsData,
  CommitSummary,
  ProductivityMetrics,
  StreakMetrics,
  MetricsSummary,
  TimelineMetrics,
  TechnologiesData,
} from './Metrics';
import type { ResourceState } from '../types';

export type MetricsSlices =
  | 'languages'
  | 'activities'
  | 'repositories'
  | 'contributions'
  | 'commits'
  | 'productivity'
  | 'streak'
  | 'summary'
  | 'timeline'
  | 'technologies';

export type MetricsContextValue = {
  state: {
    languages: ResourceState<LanguageMetricsResponse>;
    repositories: ResourceState<RepositorySummary>;
    contributions: ResourceState<ContributionsData>;
    commits: ResourceState<CommitSummary>;
    productivity: ResourceState<ProductivityMetrics>;
    streak: ResourceState<StreakMetrics>;
    summary: ResourceState<MetricsSummary>;
    timeline: ResourceState<TimelineMetrics>;
    technologies: ResourceState<TechnologiesData>;
    activities: ResourceState<ActivityMetric[]>;
  };

  fetchLanguages: (force?: boolean) => Promise<void>;
  fetchActivities: (force?: boolean) => Promise<void>;
  fetchRepositories: (force?: boolean) => Promise<void>;
  fetchContributions: (force?: boolean) => Promise<void>;
  fetchCommits: (force?: boolean) => Promise<void>;
  fetchProductivity: (force?: boolean) => Promise<void>;
  fetchStreak: (force?: boolean) => Promise<void>;
  fetchSummary: (force?: boolean) => Promise<void>;
  fetchTimeline: (force?: boolean) => Promise<void>;
  fetchTechnologies: (force?: boolean) => Promise<void>;
};
