import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const githubApi = {
  getProfile: () => api.get('/github/profile'),
  getOverview: () => api.get('/github/overview'),
  getActivities: () => api.get('/github/activities'),
  getRepositories: () => api.get('/github/repositories'),
  getStats: () => api.get('/github/stats'),
  getEvents: () => api.get('/github/events'),
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
  getLanguagesMetrics: () => api.get('/metrics/languages'),
  getActivitiesMetrics: () => api.get('/metrics/activities'),
  getRepositoriesMetrics: () => api.get('/metrics/repositories'),
  getContributionsMetrics: () => api.get('/metrics/contributions'),
  getCommitsMetrics: () => api.get('/metrics/commits'),
  getProductivityMetrics: () => api.get('/metrics/productivity'),
  getStreakMetrics: () => api.get('/metrics/streak'),
  getSummaryMetrics: () => api.get('/metrics/summary'),
  getTimelineMetrics: () => api.get('/metrics/timeline'),
  getTechnologiesMetrics: () => api.get('/metrics/technologies'),
};

export const projectsApi = {
  getProjects: () => api.get('projects/all-projects'),
  getFeaturedProjects: () => api.get('projects/featured'),
  getProjectsByLanguage: (language: string) =>
    api.get(`projects/by-language/${language}`),
  searchProjects: (query: string) => api.get(`projects/search/${query}`),
  getProjectById: (id: number) => api.get(`projects/project/${id}`),
};
