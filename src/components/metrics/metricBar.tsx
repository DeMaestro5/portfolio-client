interface MetricBarProps {
  type: 'percentage' | 'time' | 'day';
  value: number;
  max?: number;
  label?: string;
}

const calculateProgress = (data: MetricBarProps): number => {
  switch (data.type) {
    case 'percentage':
      return data.value;
    case 'time':
      return (data.value / 24) * 100;
    case 'day':
      return (data.value / 365) * 100;
    default:
      return 0;
  }
};
export default function metricBar({ data }: { data: MetricBarProps }) {
  const progress = calculateProgress(data);
  return (
    <div className='w-full h-[3px] bg-white rounded-full relative'>
      <div
        className='absolute top-0 left-0 h-full bg-neutral-900 rounded-full'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
