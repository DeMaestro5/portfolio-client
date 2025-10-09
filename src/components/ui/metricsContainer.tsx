import MetricsCard from './metricsCard';

export interface Metric {
  label: string;
  value: string;
  detail: string;
  percentage: number;
}

const dummyMetrics: Metric[] = [
  {
    label: 'LANGUAGE',
    value: '45%',
    detail: 'TypeScript',
    percentage: 45,
  },
  {
    label: 'PEAK HOUR',
    value: '8PM',
    detail: 'Most productive time',
    percentage: 67,
  },
  {
    label: 'ACTIVITY',
    value: '365',
    detail: 'Days active this year',
    percentage: 100,
  },
];

export default function metricsContainer() {
  const data = dummyMetrics;
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 bg-neutral-50 overflow-hidden'>
      {data.map((item) => (
        <MetricsCard key={item.label} data={item} />
      ))}
    </div>
  );
}
