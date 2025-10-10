import { useCallback, useEffect, useMemo, useState } from 'react';
import type { MetricsSlices } from '../../types/Metrics/context';
import type {
  ActivityMetric,
  CommitSummary,
  ContributionsData,
  LanguageMetricsResponse,
  MetricsSummary,
  ProductivityMetrics,
  RepositorySummary,
  StreakMetrics,
  TechnologiesData,
  TimelineMetrics,
} from '../../types/Metrics/Metrics';
import {
  isStale,
  makeInitialResource,
  setFailure,
  setSuccess,
  toErrorMessage,
} from '../../components/helpers/context.helper';
import type { ResourceState } from '../../types/types';
import { metricsApi } from '../../lib/api';
import { socketClient } from '../../lib/socket';
import { MetricsContext } from './metricContext';

const TTL_MS: Record<MetricsSlices, number> = {
  languages: 60_000,
  activities: 30_000,
  repositories: 5 * 60_000,
  contributions: 60_000,
  commits: 60_000,
  productivity: 60_000,
  streak: 60_000,
  summary: 60_000,
  timeline: 60_000,
  technologies: 60_000,
};

export function MetricsProvider({ children }: { children: React.ReactNode }) {
  const [languages, setLanguages] = useState<
    ResourceState<LanguageMetricsResponse>
  >(makeInitialResource());
  const [activities, setActivities] = useState<ResourceState<ActivityMetric[]>>(
    makeInitialResource()
  );
  const [repositories, setRepositories] = useState<
    ResourceState<RepositorySummary>
  >(makeInitialResource());

  const [contributions, setContributions] = useState<
    ResourceState<ContributionsData>
  >(makeInitialResource());
  const [commits, setCommits] = useState<ResourceState<CommitSummary>>(
    makeInitialResource()
  );
  const [productivity, setProductivity] = useState<
    ResourceState<ProductivityMetrics>
  >(makeInitialResource());
  const [streak, setStreak] = useState<ResourceState<StreakMetrics>>(
    makeInitialResource()
  );
  const [summary, setSummary] = useState<ResourceState<MetricsSummary>>(
    makeInitialResource()
  );

  const [timeline, setTimeline] = useState<ResourceState<TimelineMetrics>>(
    makeInitialResource()
  );

  const [technologies, setTechnologies] = useState<
    ResourceState<TechnologiesData>
  >(makeInitialResource());

  const fetchLanguages = useCallback(
    async (force = false) => {
      if (!force && !isStale(languages.lastFetched, TTL_MS.languages)) return;
      try {
        const { data } = await metricsApi.getLanguagesMetrics();
        setSuccess(setLanguages, data as LanguageMetricsResponse);
      } catch (error) {
        setFailure(setLanguages, toErrorMessage(error));
      }
    },
    [languages.lastFetched]
  );

  const fetchActivities = useCallback(
    async (force = false) => {
      if (!force && !isStale(activities.lastFetched, TTL_MS.activities)) return;
      try {
        const { data } = await metricsApi.getActivitiesMetrics();
        setSuccess(setActivities, data as ActivityMetric[]);
      } catch (error) {
        setFailure(setActivities, toErrorMessage(error));
      }
    },
    [activities.lastFetched]
  );

  const fetchRepositories = useCallback(
    async (force = false) => {
      if (!force && !isStale(repositories.lastFetched, TTL_MS.repositories))
        return;
      try {
        const { data } = await metricsApi.getRepositoriesMetrics();
        setSuccess(setRepositories, data as RepositorySummary);
      } catch (error) {
        setFailure(setRepositories, toErrorMessage(error));
      }
    },
    [repositories.lastFetched]
  );

  const fetchContributions = useCallback(
    async (force = false) => {
      if (!force && !isStale(contributions.lastFetched, TTL_MS.contributions))
        return;
      try {
        const { data } = await metricsApi.getContributionsMetrics();
        setSuccess(setContributions, data as ContributionsData);
      } catch (error) {
        setFailure(setContributions, toErrorMessage(error));
      }
    },
    [contributions.lastFetched]
  );

  const fetchCommits = useCallback(
    async (force = false) => {
      if (!force && !isStale(commits.lastFetched, TTL_MS.commits)) return;
      try {
        const { data } = await metricsApi.getCommitsMetrics();
        setSuccess(setCommits, data as CommitSummary);
      } catch (error) {
        setFailure(setCommits, toErrorMessage(error));
      }
    },
    [commits.lastFetched]
  );

  const fetchProductivity = useCallback(
    async (force = false) => {
      if (!force && !isStale(productivity.lastFetched, TTL_MS.productivity))
        return;
      try {
        const { data } = await metricsApi.getProductivityMetrics();
        setSuccess(setProductivity, data as ProductivityMetrics);
      } catch (error) {
        setFailure(setProductivity, toErrorMessage(error));
      }
    },
    [productivity.lastFetched]
  );

  const fetchStreak = useCallback(
    async (force = false) => {
      if (!force && !isStale(streak.lastFetched, TTL_MS.streak)) return;
      try {
        const { data } = await metricsApi.getStreakMetrics();
        setSuccess(setStreak, data as StreakMetrics);
      } catch (error) {
        setFailure(setStreak, toErrorMessage(error));
      }
    },
    [streak.lastFetched]
  );

  const fetchSummary = useCallback(
    async (force = false) => {
      if (!force && !isStale(summary.lastFetched, TTL_MS.summary)) return;
      try {
        const { data } = await metricsApi.getSummaryMetrics();
        setSuccess(setSummary, data as MetricsSummary);
      } catch (error) {
        setFailure(setSummary, toErrorMessage(error));
      }
    },
    [summary.lastFetched]
  );

  const fetchTimeline = useCallback(
    async (force = false) => {
      if (!force && !isStale(timeline.lastFetched, TTL_MS.timeline)) return;
      try {
        const { data } = await metricsApi.getTimelineMetrics();
        setSuccess(setTimeline, data as TimelineMetrics);
      } catch (error) {
        setFailure(setTimeline, toErrorMessage(error));
      }
    },
    [timeline.lastFetched]
  );

  const fetchTechnologies = useCallback(
    async (force = false) => {
      if (!force && !isStale(technologies.lastFetched, TTL_MS.technologies))
        return;
      try {
        const { data } = await metricsApi.getTechnologiesMetrics();
        setSuccess(setTechnologies, data as TechnologiesData);
      } catch (error) {
        setFailure(setTechnologies, toErrorMessage(error));
      }
    },
    [technologies.lastFetched]
  );

  useEffect(() => {
    const socket = socketClient.connect();

    const onSyncComplete = () => {
      void Promise.all([
        fetchLanguages(true),
        fetchRepositories(true),
        fetchContributions(true),
        fetchCommits(true),
        fetchProductivity(true),
        fetchStreak(true),
        fetchSummary(true),
        fetchTimeline(true),
        fetchTechnologies(true),
        fetchActivities(true),
      ]).catch((error) => {
        console.log(error);
      });
    };

    socket.on('github:sync:complete', onSyncComplete);

    return () => {
      socket.off('github:sync:complete', onSyncComplete);
    };
  }, [
    fetchLanguages,
    fetchRepositories,
    fetchContributions,
    fetchCommits,
    fetchProductivity,
    fetchStreak,
    fetchSummary,
    fetchTimeline,
    fetchTechnologies,
    fetchActivities,
  ]);

  const value = useMemo(
    () => ({
      state: {
        languages,
        activities,
        repositories,
        contributions,
        commits,
        productivity,
        streak,
        summary,
        timeline,
        technologies,
      },
      fetchLanguages,
      fetchActivities,
      fetchRepositories,
      fetchContributions,
      fetchCommits,
      fetchProductivity,
      fetchStreak,
      fetchSummary,
      fetchTimeline,
      fetchTechnologies,
    }),
    [
      languages,
      activities,
      repositories,
      contributions,
      commits,
      productivity,
      streak,
      summary,
      timeline,
      technologies,
      fetchLanguages,
      fetchActivities,
      fetchRepositories,
      fetchContributions,
      fetchCommits,
      fetchProductivity,
      fetchStreak,
      fetchSummary,
      fetchTimeline,
      fetchTechnologies,
    ]
  );

  return (
    <MetricsContext.Provider value={value}>{children}</MetricsContext.Provider>
  );
}
