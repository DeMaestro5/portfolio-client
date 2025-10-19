import type { techStack } from '../../types/types';

export default function builtWith({ data }: techStack) {
  const { tech } = data;
  return (
    <div className='bg-white py-4 px-6 sm:py-6 sm:px-8 text-center transition-all metric-card-hover duration-300 border border-neutral-200 rounded-lg'>
      {tech}
    </div>
  );
}
