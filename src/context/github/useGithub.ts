import { useContext } from 'react';
import { GithubContext } from './GithubContext';

export function useGithub() {
  const context = useContext(GithubContext);
  if (!context) {
    throw new Error('useGithub must be used within a GithubProvider');
  }
  return context;
}
