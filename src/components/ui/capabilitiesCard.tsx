import type { Capabilities } from './capabilitiesContainer';

export default function capabilitiesCard({ data }: { data: Capabilities }) {
  const { name, level } = data;
  return (
    <div className='bg-white py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 text-center relative transition-all duration-300 card-hover-border '>
      <div className='text-xs sm:text-sm text-neutral-700 tracking-widest font-medium'>
        {name}
      </div>
      <div className='text-[10px] sm:text-[11px] text-neutral-600 tracking-wider font-light uppercase'>
        {level}
      </div>
    </div>
  );
}
