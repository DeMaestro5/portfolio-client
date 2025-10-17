import Card from './card';
// import type { CardProps } from '../../types/types';
import type { Project } from '../../types/Projects/Projects';

export default function AllProjectsContainer({ data }: { data: Project[] }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
      {data.length > 0 ? (
        data.map((project) => <Card key={project.id} data={project} />)
      ) : (
        <div className='text-center text-neutral-500 grid col-span-full'>
          No projects found, try searching for a different project.
        </div>
      )}
    </div>
  );
}
