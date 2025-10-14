import { useMetrics } from '../../context/metrics/useMetrics';
import ActivityCard from '../ui/activityCard';
import Heading from '../ui/heading';
import { useEffect } from 'react';
import Loader from '../ui/loader';
import ErrorState from '../ui/error';

export default function Activities() {
  const { state, fetchTimeline } = useMetrics();
  const { loading, data, error } = state.timeline;
  const first20 = data?.events.slice(0, 20);

  useEffect(() => {
    fetchTimeline();
  }, [fetchTimeline]);
  console.log(data);

  if (loading || !data) return <Loader />;

  if (error)
    return <ErrorState message={error} onRetry={() => fetchTimeline(true)} />;

  return (
    <section className='relative py-12 sm:py-16 md:py-20 lg:py-24'>
      <Heading number='02' title='Activities' />
      {first20?.map((item, index) => (
        <ActivityCard key={`${item.date}-${index}`} activity={item} />
      ))}
    </section>
  );
}
