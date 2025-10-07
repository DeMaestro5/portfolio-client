import MetricBar from './metricBar';
import type { Metric } from './metricsContainer';
export default function metricsCard({ data }: { data: Metric }) {
  const { label, value, detail, percentage } = data;
  return (
    <div className='bg-white border-1 border-neutral-200 mt-4 metric-card-hover hover:border-1 hover:border-neutral-900 rounded-sm py-[56px] px-[48px] transition-all duration-0.3 card-with-shadow'>
      <div className='text-sm text-neutral-500 tracking-widest font-medium mb-[20px] uppercase'>
        {label}
      </div>
      <div className='text-6xl font-extralight text-neutral-900 tracking-[-20x] leading-none mb-[16px]'>
        {value}
      </div>
      <div className='text-sm text-neutral-600 font-light mb-[32px]'>
        {detail}
      </div>
      <MetricBar data={{ type: 'percentage', value: percentage }} />
    </div>
  );
}
