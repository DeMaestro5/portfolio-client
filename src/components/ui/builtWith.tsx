import type { TechStack } from '../../pages/ProjectDetails';

export default function builtWith({ data }: { data: TechStack }) {
  const { techStack } = data;
  return (
    <div className='bg-white py-[32px] px-[48px] text-center transition-all metric-card-hover duration-0.3 border-1 border-neutral-200 rounded-lg'>
      {techStack}
    </div>
  );
}
