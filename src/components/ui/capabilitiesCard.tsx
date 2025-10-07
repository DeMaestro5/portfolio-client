import type { Capabilities } from './capabilitiesContainer';

export default function capabilitiesCard({ data }: { data: Capabilities }) {
  const { name, level } = data;
  return (
    <div className='bg-white py-[48px] px-[32px] text-center relative transition-all duration-0.3 card-hover-border '>
      <div className='text-sm text-neutral-700 tracking-widest font-medium'>
        {name}
      </div>
      <div className='text-[11px] text-neutral-600 tracking-wider font-light uppercase'>
        {level}
      </div>
    </div>
  );
}
