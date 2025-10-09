import MetricBar from './metricBar';
import type { Metric } from './metricsContainer';
export default function metricsCard({ data }: { data: Metric }) {
  const { label, value, detail, percentage } = data;
  return (
    <div className='bg-white border border-neutral-200 mt-4 metric-card-hover hover:border-neutral-900 rounded-sm py-8 px-6 sm:py-10 sm:px-8 lg:py-14 lg:px-12 transition-all duration-300 card-with-shadow'>
      <div className='text-sm text-neutral-500 tracking-widest font-medium mb-[20px] uppercase'>
        {label}
      </div>
      <div className='text-4xl sm:text-5xl lg:text-6xl font-extralight text-neutral-900 tracking-tight leading-none mb-4'>
        {value}
      </div>
      <div className='text-sm text-neutral-600 font-light mb-6'>{detail}</div>
      <MetricBar data={{ type: 'percentage', value: percentage }} />
    </div>
  );
}
