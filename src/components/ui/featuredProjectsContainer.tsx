import { useProjects } from '../../context/projects/useProject';
import Card from './card';
import { useEffect } from 'react';
import Loader from './loader';
import ErrorState from './error';

export default function FeaturedProjectsContainer() {
  const { state, fetchFeaturedProjects } = useProjects();
  const { loading, data, error } = state.featured;

  useEffect(() => {
    fetchFeaturedProjects();
  }, [fetchFeaturedProjects]);

  if (loading || !data) return <Loader />;

  if (error)
    return (
      <ErrorState message={error} onRetry={() => fetchFeaturedProjects(true)} />
    );

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
      {data.map((project) => (
        <Card key={project.id} data={project} />
      ))}
    </div>
  );
}
