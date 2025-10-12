import axios from 'axios';
import {
  normalizeGitHubOverview,
  normalizeGitHubProfile,
  normalizeGitHubActivities,
  normalizeLanguageMetricsResponse,
  normalizeGitHubRepositories,
  normalizeGitHubStats,
  normalizeGitHubEvents,
  normalizeActivityMetrics,
  normalizeRepositoryMetrics,
  normalizeContributionsMetrics,
  normalizeCommitMetrics,
  normalizeProductivityMetrics,
  normalizeStreakMetrics,
  normalizeTimelineMetrics,
  normalizeTechnologiesMetrics,
  normalizeMetricsSummary,
  normalizeProject,
  normalizeProjects,
} from './utils';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const githubApi = {
  getProfile: async () => {
    const res = await api.get('/github/profile');
    return { data: normalizeGitHubProfile(res.data) };
  },
  getOverview: async () => {
    const res = await api.get('/github/overview');
    return { data: normalizeGitHubOverview(res.data) };
  },
  getActivities: async () => {
    const res = await api.get('/github/activities');
    // Server returns: { statusCode, message, metadata, data: [...] }
    const unwrapped = res.data?.data || res.data;
    const arr = Array.isArray(unwrapped) ? unwrapped : [];
    return { data: arr.map(normalizeGitHubActivities) };
  },
  getRepositories: async () => {
    const res = await api.get('/github/repositories');
    // Server returns: { statusCode, message, metadata, data: [...] }
    const unwrapped = res.data?.data || res.data;
    const arr = Array.isArray(unwrapped) ? unwrapped : [];
    return { data: arr.map(normalizeGitHubRepositories) };
  },
  getStats: async () => {
    const res = await api.get('/github/stats');
    return { data: normalizeGitHubStats(res.data) };
  },

  getEvents: async () => {
    const res = await api.get('/github/events');
    // Server returns: { statusCode, message, metadata, data: [...] }
    const unwrapped = res.data?.data || res.data;
    const arr = Array.isArray(unwrapped) ? unwrapped : [];
    return { data: arr.map(normalizeGitHubEvents) };
  },
  sync: () => api.post('/github/sync'),
  getRepositoryByName: (name: string) =>
    api.get(`/github/repositories/${name}`),
  getRepositoryCommits: (name: string) =>
    api.get(`/github/repositories/${name}/commits`),
  getRepositoryContributors: (name: string) =>
    api.get(`/github/repositories/${name}/contributors`),
  getRepositoryLanguages: (name: string) =>
    api.get(`/github/repositories/${name}/languages`),
};

export const metricsApi = {
  getLanguagesMetrics: async () => {
    const res = await api.get('/metrics/languages');
    return { data: normalizeLanguageMetricsResponse(res.data) };
  },

  getActivitiesMetrics: async () => {
    const res = await api.get('/metrics/activities');
    return { data: normalizeActivityMetrics(res.data) };
  },

  getRepositoriesMetrics: async () => {
    const res = await api.get('/metrics/repositories');
    return { data: normalizeRepositoryMetrics(res.data) };
  },
  getContributionsMetrics: async () => {
    const res = await api.get('/metrics/contributions');
    return { data: normalizeContributionsMetrics(res.data) };
  },

  getCommitsMetrics: async () => {
    const res = await api.get('/metrics/commits');
    return { data: normalizeCommitMetrics(res.data) };
  },

  getProductivityMetrics: async () => {
    const res = await api.get('/metrics/productivity');
    return { data: normalizeProductivityMetrics(res.data) };
  },

  getStreakMetrics: async () => {
    const res = await api.get('/metrics/streak');
    return { data: normalizeStreakMetrics(res.data) };
  },

  getSummaryMetrics: async () => {
    const res = await api.get('/metrics/summary');
    return { data: normalizeMetricsSummary(res.data) };
  },

  getTimelineMetrics: async () => {
    const res = await api.get('/metrics/timeline');
    return { data: normalizeTimelineMetrics(res.data) };
  },
  getTechnologiesMetrics: async () => {
    const res = await api.get('/metrics/technologies');
    return { data: normalizeTechnologiesMetrics(res.data) };
  },
};

export const projectsApi = {
  getProjects: async () => {
    const res = await api.get('projects/all-projects');
    return { data: normalizeProjects(res.data) };
  },
  getFeaturedProjects: async () => {
    const res = await api.get('projects/featured');
    return { data: normalizeProjects(res.data) };
  },
  getProjectsByLanguage: async (language: string) => {
    const res = await api.get(`projects/by-language/${language}`);
    return { data: normalizeProjects(res.data) };
  },
  searchProjects: async (query: string) => {
    const res = await api.get(`projects/search/${query}`);
    return { data: normalizeProjects(res.data) };
  },
  getProjectById: async (id: number) => {
    const res = await api.get(`projects/project/${id}`);
    return { data: normalizeProject(res.data) };
  },
};
