import type { RelatedProject } from '../../types/types';

export default function RelatedProjectCard({ data }: { data: RelatedProject }) {
  const { label, detail } = data;
  return (
    <div className='bg-white border border-neutral-200 mt-4 metric-card-hover hover:border-neutral-900 rounded-sm py-8 px-6 sm:py-10 sm:px-8 transition-all duration-300 card-with-shadow'>
      <div className='text-sm text-neutral-900 tracking-widest font-medium mb-[20px] uppercase'>
        {label}
      </div>

      <div className='text-[13px] text-neutral-600 font-light mb-6'>
        {detail ? detail : 'No description available'}
      </div>
    </div>
  );
}
