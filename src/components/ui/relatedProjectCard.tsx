import type { RelatedProject } from '../../pages/ProjectDetails';

export default function RelatedProjectCard({ data }: { data: RelatedProject }) {
  const { label, detail } = data;
  return (
    <div className='bg-white border-1 border-neutral-200 mt-4 metric-card-hover hover:border-1 hover:border-neutral-900 rounded-sm py-[56px] px-[48px] transition-all duration-0.3 card-with-shadow'>
      <div className='text-sm text-neutral-900 tracking-widest font-medium mb-[20px] uppercase'>
        {label}
      </div>

      <div className='text-[13px] text-neutral-600 font-light mb-[32px]'>
        {detail}
      </div>
    </div>
  );
}
