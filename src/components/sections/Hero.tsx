import PulseDot from '../ui/pulseDot';
import HeroHeader from '../ui/heroHeader';
import { useEffect } from 'react';
import { useMetrics } from '../../context/metrics/useMetrics';

export default function Hero() {
  const { state, fetchCommits } = useMetrics();
  const { loading, data } = state.commits;

  useEffect(() => {
    fetchCommits();
  }, [fetchCommits]);
  if (loading) return <div>Loading...</div>;
  console.log(data);

  return (
    <section className='min-h-[70vh] flex flex-col justify-center pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8'>
      <HeroHeader
        title='portfolio website'
        heading='OSSIAKEME STEPHEN'
        description='Full-stack developer crafting elegant solutions to complex problems'
      />
      <div className='relative flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-neutral-900 py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6 bg-white border border-neutral-200 rounded-lg w-fit font-light transition-all duration-300'>
        <PulseDot />
        <span>Available for opportunities</span>
      </div>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16 md:mt-28 sm:mt-16 mt-8 '>
        <div className='flex flex-col'>
          <div className='text-4xl sm:text-5xl md:text-6xl font-extralight text-neutral-900 tracking-tight leading-none mb-3'>
            1,348
          </div>
          <div className='text-xs text-neutral-500 tracking-tight font-light uppercase'>
            Commits
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='text-4xl sm:text-5xl md:text-6xl font-extralight text-neutral-900 tracking-tight leading-none mb-3'>
            25
          </div>
          <div className='text-xs text-neutral-500 tracking-tight font-light uppercase'>
            Projects
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='text-4xl sm:text-5xl md:text-6xl font-extralight text-neutral-900 tracking-tight leading-none mb-3'>
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
