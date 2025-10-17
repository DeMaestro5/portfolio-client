import { useMetrics } from '../../context/metrics/useMetrics';
import TimelineCard from '../ui/timelineCard';
import Heading from '../ui/heading';
import { useEffect } from 'react';
import Loader from '../ui/loader';
import ErrorState from '../ui/error';

export default function Activities() {
  const { state, fetchTimeline } = useMetrics();
  const { loading, data, error } = state.timeline;

  useEffect(() => {
    fetchTimeline();
  }, [fetchTimeline]);

  if (loading || !data) return <Loader />;

  if (error)
    return <ErrorState message={error} onRetry={() => fetchTimeline(true)} />;

  const first20 = data.events.slice(0, 20);

  return (
    <section className='relative py-12 sm:py-16 md:py-20 lg:py-24'>
      <Heading number='02' title='Timeline' />
      {first20.map((item, index) => (
        <TimelineCard key={`${item.date}-${index}`} timeline={item} />
      ))}
    </section>
  );
}
