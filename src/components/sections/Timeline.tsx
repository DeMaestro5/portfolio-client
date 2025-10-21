import { useMetrics } from '../../context/metrics/useMetrics';
import TimelineCard from '../cards/timelineCard';
import Heading from '../ui/heading';
import { useEffect, useState } from 'react';
import Loader from '../ui/loader';
import ErrorState from '../ui/error';

export default function Activities() {
  const [showAll, setShowAll] = useState(false);
  const { state, fetchTimeline } = useMetrics();
  const { loading, data, error } = state.timeline;

  useEffect(() => {
    fetchTimeline();
  }, [fetchTimeline]);

  if (loading || !data) return <Loader />;

  if (error)
    return <ErrorState message={error} onRetry={() => fetchTimeline(true)} />;

  const visibleCount = showAll ? 20 : 4;
  const visibleItems = data.events.slice(0, visibleCount);

  function handleShowMore() {
    setShowAll(!showAll);
  }
  return (
    <section
      id='timeline'
      className='relative py-12 sm:py-16 md:py-20 lg:py-24'
    >
      <Heading number='02' title='Timeline' />
      {visibleItems.map((item, index) => (
        <TimelineCard key={`${item.date}-${index}`} timeline={item} />
      ))}
      <button
        className='text-sm text-neutral-500 border border-neutral-200 mt-4 p-2 rounded-full cursor-pointer hover:shadow'
        onClick={handleShowMore}
      >
        {showAll ? 'show less timeline' : 'show more timeline'}
      </button>
    </section>
  );
}
