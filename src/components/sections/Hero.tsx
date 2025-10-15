import PulseDot from '../ui/pulseDot';
import HeroHeader from '../ui/heroHeader';
import { useEffect } from 'react';
import { useMetrics } from '../../context/metrics/useMetrics';
import Loader from '../ui/loader';
import ErrorState from '../ui/error';

export default function Hero() {
  const { state, fetchSummary } = useMetrics();
  const { loading, data, error } = state.summary;

  useEffect(() => {
    fetchSummary();
  }, [fetchSummary]);
  if (loading || !data) return <Loader />;

  if (error) {
    return <ErrorState message={error} onRetry={() => fetchSummary(true)} />;
  }

  const currentStreak = data.activity.currentStreak;
  const totalCommits = data.portfolio.totalCommits;
  const totalProjects = data.portfolio.totalProjects;
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
            {totalCommits.toLocaleString()}
          </div>
          <div className='text-xs text-neutral-500 tracking-tight font-light uppercase'>
            Commits
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='text-4xl sm:text-5xl md:text-6xl font-extralight text-neutral-900 tracking-tight leading-none mb-3'>
            {totalProjects}
          </div>
          <div className='text-xs text-neutral-500 tracking-tight font-light uppercase'>
            Projects
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='text-4xl sm:text-5xl md:text-6xl font-extralight text-neutral-900 tracking-tight leading-none mb-3'>
            {currentStreak}
          </div>
          <div className='text-xs text-neutral-500 tracking-tight font-light uppercase'>
            current streak
          </div>
        </div>
      </div>
    </section>
  );
}
