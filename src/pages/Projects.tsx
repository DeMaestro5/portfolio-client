import AllProjectsContainer from '../components/ui/allProjectsContainer';
import HeroHeader from '../components/ui/heroHeader';
import { useProjects } from '../context/projects/useProject';

export default function Projects() {
  const { state } = useProjects();
  const { data } = state.projects;

  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-stone-200 rounded-t-md '>
        <HeroHeader
          title='home/projects'
          heading='All Projects'
          description='A collection of projects showcasing full-stack development, real-time systems, and modern web technologies'
        />
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-6 sm:py-8 border-y border-neutral-200'>
          <div className='text-sm text-neutral-500'>
            showing {data?.length} projects
          </div>
          <div className='flex flex-wrap gap-2'>
            <button className='text-sm text-neutral-500 border border-neutral-200 rounded-lg px-3 py-2 sm:px-4 hover:bg-neutral-900 hover:text-white'>
              All
            </button>
            <button className='text-sm text-neutral-500 border border-neutral-200 rounded-lg px-3 py-2 sm:px-4 hover:bg-neutral-900 hover:text-white'>
              Frontend
            </button>
            <button className='text-sm text-neutral-500 border border-neutral-200 rounded-lg px-3 py-2 sm:px-4 hover:bg-neutral-900 hover:text-white'>
              Backend
            </button>
            <button className='text-sm text-neutral-500 border border-neutral-200 rounded-lg px-3 py-2 sm:px-4 hover:bg-neutral-900 hover:text-white'>
              Full-stack
            </button>
          </div>
        </div>
        <div className='py-8 sm:py-10 lg:py-12'>
          <AllProjectsContainer />
        </div>
      </div>
    </div>
  );
}
