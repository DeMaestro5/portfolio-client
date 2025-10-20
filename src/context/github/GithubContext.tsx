import { useCallback, useEffect, useMemo, useState } from 'react';
import type {
  GitHubActivity,
  GitHubEvents,
  GitHubOverview,
  GitHubProfile,
  GitHubRepository,
  GitHubStats,
} from '../../types/Github/Github';
import type {
  GithubContextValue,
  GithubSlices,
} from '../../types/Github/context';
import {
  isStale,
  makeInitialResource,
  toErrorMessage,
} from '../../components/helpers/context.helper';
import type { ResourceState } from '../../types/types';
import { githubApi } from '../../lib/api';
import { socketClient } from '../../lib/socket';
import { GithubContext } from './githubContext';
import {
  startLoading,
  setSuccess,
  setFailure,
} from '../../components/helpers/context.helper';

const TTL_MS: Record<GithubSlices, number> = {
  profile: 5 * 60_000,
  overview: 60_000,
  activities: 30_000,
  repositories: 5 * 60_000,
  stats: 60_000,
  events: 60_000,
};

export function GithubProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<ResourceState<GitHubProfile>>(
    makeInitialResource()
  );
  const [overview, setOverview] = useState<ResourceState<GitHubOverview>>(
    makeInitialResource()
  );
  const [activities, setActivities] = useState<ResourceState<GitHubActivity[]>>(
    makeInitialResource()
  );
  const [repositories, setRepositories] = useState<
    ResourceState<GitHubRepository[]>
  >(makeInitialResource());
  const [stats, setStats] = useState<ResourceState<GitHubStats>>(
    makeInitialResource()
  );
  const [events, setEvents] = useState<ResourceState<GitHubEvents[]>>(
    makeInitialResource()
  );

  const fetchProfile = useCallback(
    async (force = false) => {
      if (!force && !isStale(profile.lastFetched, TTL_MS.profile)) return;
      startLoading(setProfile);
      try {
        const { data } = await githubApi.getProfile();
        setSuccess(setProfile, data);
      } catch (err) {
        setFailure(setProfile, toErrorMessage(err));
      }
    },
    [profile.lastFetched]
  );

  const fetchOverview = useCallback(
    async (force = false) => {
      if (!force && !isStale(overview.lastFetched, TTL_MS.overview)) return;
      startLoading(setOverview);
      try {
        const { data } = await githubApi.getOverview();
        setSuccess(setOverview, data);
      } catch (err) {
        setFailure(setOverview, toErrorMessage(err));
      }
    },
    [overview.lastFetched]
  );

  const fetchActivities = useCallback(
    async (force = false) => {
      if (!force && !isStale(activities.lastFetched, TTL_MS.activities)) return;
      startLoading(setActivities);
      try {
        const { data } = await githubApi.getActivities();
        setSuccess(setActivities, data);
      } catch (err) {
        setFailure(setActivities, toErrorMessage(err));
      }
    },
    [activities.lastFetched]
  );

  const fetchRepositories = useCallback(
    async (force = false) => {
      if (!force && !isStale(repositories.lastFetched, TTL_MS.repositories))
        return;
      startLoading(setRepositories);
      try {
        const { data } = await githubApi.getRepositories();
        setSuccess(setRepositories, data);
      } catch (err) {
        setFailure(setRepositories, toErrorMessage(err));
      }
    },
    [repositories.lastFetched]
  );

  const fetchStats = useCallback(
    async (force = false) => {
      if (!force && !isStale(stats.lastFetched, TTL_MS.stats)) return;
      startLoading(setStats);
      try {
        const { data } = await githubApi.getStats();
        setSuccess(setStats, data);
      } catch (err) {
        setFailure(setStats, toErrorMessage(err));
      }
    },
    [stats.lastFetched]
  );

  const fetchEvents = useCallback(
    async (force = false) => {
      if (!force && !isStale(events.lastFetched, TTL_MS.events)) return;
      startLoading(setEvents);
      try {
        const { data } = await githubApi.getEvents();
        setSuccess(setEvents, data);
      } catch (err) {
        setFailure(setEvents, toErrorMessage(err));
      }
    },
    [events.lastFetched]
  );

  const fetchRepositoryByName = useCallback(
    async (name: string): Promise<GitHubRepository | null> => {
      try {
        const { data } = await githubApi.getRepositoryByName(name);
        return data as GitHubRepository;
      } catch {
        return null;
      }
    },
    []
  );
  const sync = useCallback(async () => {
    try {
      await githubApi.sync();
    } catch (err) {
      throw new Error(toErrorMessage(err));
    }
  }, []);

  useEffect(() => {
    const socket = socketClient.connect();

    const onActivity = (activity: GitHubActivity) => {
      setActivities((prev) => ({
        data: [activity, ...(prev.data ?? [])],
        loading: false,
        error: null,
        lastFetched: prev.lastFetched ?? Date.now(),
      }));
    };

    const onSyncComplete = () => {
      void fetchProfile(true);
      void fetchRepositories(true);
      void fetchStats(true);
      void fetchActivities(true);
    };

    socket.on('github:activity', onActivity);
    socket.on('github:sync:complete', onSyncComplete);

    return () => {
      socket.off('github:activity', onActivity);
      socket.off('github:sync:complete', onSyncComplete);
    };
  }, [fetchProfile, fetchRepositories, fetchStats, fetchActivities]);

  const value = useMemo<GithubContextValue>(
    () => ({
      state: {
        profile,
        overview,
        activities,
        repositories,
        stats,
        events,
      },
      fetchProfile,
      fetchOverview,
      fetchActivities,
      fetchRepositories,
      fetchStats,
      fetchEvents,
      fetchRepositoryByName,
      sync,
    }),
    [
      profile,
      overview,
      activities,
      repositories,
      stats,
      events,
      fetchProfile,
      fetchOverview,
      fetchActivities,
      fetchRepositories,
      fetchStats,
      fetchEvents,
      fetchRepositoryByName,
      sync,
    ]
  );
  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
}
