import PulseDot from '../ui/pulseDot';
import type { TimelineCardProps } from '../../types/types';
import { formatDate } from '../../helpers/formatDate';

export default function TimelineCard({
  timeline,
}: {
  timeline: TimelineCardProps;
}) {
  const { type, description, project, date } = timeline;
  const formatType = (type: string) => type.replace(/_/g, ' ').toUpperCase();

  const isRecent = (dateString: string) => {
    const eventDate = new Date(dateString);
    const now = new Date();
    const hoursDiff = (now.getTime() - eventDate.getTime()) / (1000 * 60 * 60);
    return hoursDiff <= 48; // Events from last 48 hours are "live"
  };
  const live = isRecent(date);

  return (
    <div className='activity-card-hover border-t border-neutral-200 card-with-shadow '>
      <div className='flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 py-6 sm:py-7 md:py-8 border-b border-neutral-200 relative transition-all duration-300'>
        <div className='min-w-[72px] sm:min-w-[100px] text-xs sm:text-sm text-neutral-500 pt-[2px] tabular-nums'>
          {formatDate(date)}
        </div>
        <div className='flex-1'>
          <div className='text-[11px] text-neutral-400 uppercase tracking-wider mb-2 font-medium'>
            {formatType(type)}
          </div>
          <div className='text-base sm:text-lg text-neutral-500 font-light mb-1.5 sm:mb-2'>
            {description}
          </div>
          <div className='text-[12px] sm:text-[13px] text-neutral-400 font-mono break-words'>
            {project}
          </div>
        </div>
        <div className='mr-0 sm:mr-5 mt-2 sm:mt-0'>{live && <PulseDot />}</div>
      </div>
    </div>
  );
}
