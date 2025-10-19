import { useEffect, useMemo, useState } from 'react';
import AllProjectsContainer from '../components/ui/allProjectsContainer';
import HeroHeader from '../components/ui/heroHeader';
import { useProjects } from '../context/projects/useProject';
import Loader from '../components/ui/loader';
import ErrorState from '../components/ui/error';
import BackButton from '../components/ui/backButton';

export default function Projects() {
  const [search, setSearch] = useState('');
  const { state, fetchProjects } = useProjects();
  const { data, loading, error } = state.projects;

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const filteredProjects = useMemo(() => {
    return (
      data?.filter(
        (project) =>
          project.name.toLowerCase().includes(search.toLowerCase()) ||
          project.description?.toLowerCase().includes(search.toLowerCase()) ||
          project.language?.toLowerCase().includes(search.toLowerCase()) ||
          project.topics?.some((topic) =>
            topic.toLowerCase().includes(search.toLowerCase())
          )
      ) ?? []
    );
  }, [data, search]);

  if (loading) return <Loader />;

  if (error)
    return <ErrorState message={error} onRetry={() => fetchProjects(true)} />;

  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-stone-200 rounded-t-md '>
        <BackButton />
        <HeroHeader
          title='home | projects'
          heading='All Projects'
          description='A collection of projects showcasing full-stack development, real-time systems, and modern web technologies'
        />
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-6 sm:py-8 border-y border-neutral-200'>
          <div className='text-sm text-neutral-500'>
            showing {filteredProjects.length} projects
          </div>

          <input
            type='text'
            placeholder='Search projects'
            className='text-sm text-neutral-500 border border-neutral-200 rounded-lg px-3 py-2 sm:px-4'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='py-8 sm:py-10 lg:py-12'>
          <AllProjectsContainer data={filteredProjects} />
        </div>
      </div>
    </div>
  );
}
