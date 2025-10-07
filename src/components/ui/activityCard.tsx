import PulseDot from './pulseDot';
import type { Activity } from '../sections/Activities';

export default function activityCard({ activity }: { activity: Activity }) {
  const { type, message, repo, timestamp, live } = activity;
  return (
    <div className='activity-card-hover border-t-1 border-neutral-200 card-with-shadow '>
      <div className='flex items-start gap-[32px] py-[32px] border-b-1 border-neutral-200 relative transition-all duration-0.3'>
        <div className='min-w-[100px] text-sm text-neutral-500 pt-[2px] tabular-nums'>
          {timestamp}
        </div>
        <div className='flex-1'>
          <div className='text-[11px] text-neutral-400 uppercase tracking-wider mb-[8px] font-medium'>
            {type}
          </div>
          <div className='text-lg text-neutral-500 font-light mb-[6px]'>
            {message}
          </div>
          <div className='text-[13px] text-neutral-400 font-mono'>{repo}</div>
        </div>
        <div className='mr-5'>{live && <PulseDot />}</div>
      </div>
    </div>
  );
}
