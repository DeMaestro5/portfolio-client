import type { ResourceState } from '../types/types';

export function makeInitialResource<T>(): ResourceState<T> {
  return { data: null, loading: false, error: null, lastFetched: null };
}

export function isStale(
  lastFetched: number | null,
  staleTime: number
): boolean {
  if (!lastFetched) return true;
  return Date.now() - lastFetched > staleTime;
}

export function toErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return 'Request failed';
}

export const startLoading = <T>(
  set: React.Dispatch<React.SetStateAction<ResourceState<T>>>
) => {
  set((prev) => ({ ...prev, loading: true, error: null }));
};

export const setSuccess = <T>(
  set: React.Dispatch<React.SetStateAction<ResourceState<T>>>,
  data: T
) => {
  set({
    data,
    loading: false,
    error: null,
    lastFetched: Date.now(),
  });
};

export const setFailure = <T>(
  set: React.Dispatch<React.SetStateAction<ResourceState<T>>>,
  error: string
) => {
  set((prev) => ({ ...prev, loading: false, error }));
};
