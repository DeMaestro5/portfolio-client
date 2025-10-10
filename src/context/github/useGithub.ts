import { useContext } from 'react';
import { GithubContext } from './githubContext';

export function useGithub() {
  const context = useContext(GithubContext);
  if (!context) {
    throw new Error('useGithub must be used within a GithubProvider');
  }
  return context;
}
