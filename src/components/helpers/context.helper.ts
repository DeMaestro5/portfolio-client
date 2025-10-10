import type { ResourceState } from '../../types/Github/context';

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
