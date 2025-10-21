import Heading from '../ui/heading';
import MetricsContainer from '../metrics/metricsContainer';

export default function Metrics() {
  return (
    <section id='metrics' className='relative py-12 sm:py-16 md:py-20 lg:py-24'>
      <Heading number='04' title='By the numbers' />
      <MetricsContainer />
    </section>
  );
}
