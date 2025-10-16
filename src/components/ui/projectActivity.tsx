import type { Commit } from '../../types/types';
import { formatDate } from '../helpers/formatDate';

export default function ProjectActivity({ data }: { data: Commit }) {
  const { message, author, timestamp } = data;
  return (
    <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8 lg:gap-12 py-2 sm:py-3 border-b-1 mb-4 border-neutral-200'>
      <div className='text-[11px] text-neutral-500 font-medium uppercase min-w-[100px]'>
        {formatDate(timestamp)}
      </div>
      <div className='flex flex-col gap-2 pb-4 sm:pb-6 md:pb-8 flex-1'>
        <p className='text-sm font-light text-neutral-900 break-words'>
          {message}
        </p>
        <p className='text-sm text-neutral-500'>by {author}</p>
      </div>
    </div>
  );
}
