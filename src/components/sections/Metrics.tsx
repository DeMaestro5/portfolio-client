import Heading from '../ui/heading';
import MetricsContainer from '../ui/metricsContainer';

export default function Metrics() {
  return (
    <section className='relative py-[100px]'>
      <Heading number='04' title='By the numbers' />
      <MetricsContainer />
    </section>
  );
}
