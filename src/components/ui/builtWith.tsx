import type { TechStack } from '../../pages/ProjectDetails';

export default function builtWith({ data }: { data: TechStack }) {
  const { techStack } = data;
  return (
    <div className='bg-white py-4 px-6 sm:py-6 sm:px-8 text-center transition-all metric-card-hover duration-300 border border-neutral-200 rounded-lg'>
      {techStack}
    </div>
  );
}
