import PulseDot from '../ui/pulseDot';
import HeroHeader from '../ui/heroHeader';

export default function Hero() {
  return (
    <section className='min-h-85vh flex flex-col justify-center pb-5'>
      <HeroHeader
        title='portfolio website'
        heading='OSSIAKEME STEPHEN'
        description='Full-stack developer crafting elegant solutions to complex problems'
      />

      <div className='relative flex items-center gap-[10px] text-lg text-neutral-900 py-4 px-6 bg-white border border-neutral-200 rounded-lg w-fit font-light transition-all duration-[0.3s]'>
        <PulseDot />
        <span>Available for opportunities</span>
      </div>
      <div className='flex gap-[80px] mt-[120px]'>
        <div className='flex flex-col'>
          <div className='text-5xl font-extralight text-neutral-900 tracking-[-20x] leading-none mb-[12px]'>
            1,348
          </div>
          <div className='text-xs text-neutral-500 tracking-tight font-light uppercase'>
            Commits
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='text-5xl font-extralight text-neutral-900 tracking-[-20x] leading-none mb-[12px]'>
            25
          </div>
          <div className='text-xs text-neutral-500 tracking-tight font-light uppercase'>
            Projects
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='text-5xl font-extralight text-neutral-900 tracking-[-20x] leading-none mb-[12px]'>
            20
          </div>
          <div className='text-xs text-neutral-500 tracking-tight font-light uppercase'>
            days streak
          </div>
        </div>
      </div>
    </section>
  );
}
