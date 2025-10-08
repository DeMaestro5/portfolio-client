import type { Commit } from '../../pages/ProjectDetails';

export default function ProjectActivity({ data }: { data: Commit }) {
  const { message, author, timestamp } = data;
  return (
    <div className='flex gap-[48px] py-[4px] border-b-1 mb-4 border-neutral-200'>
      <div className='text-[11px] text-neutral-500 font-medium uppercase mb-[16px] '>
        {timestamp}
      </div>
      <div className='flex flex-col gap-[8px] pb-[32px]'>
        <p className='text-sm font-light text-neutral-900'>{message}</p>
        <p className='text-sm text-neutral-500'>by {author}</p>
      </div>
    </div>
  );
}
