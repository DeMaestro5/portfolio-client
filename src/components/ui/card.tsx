import type { Project } from './container';
import { useNavigate } from 'react-router-dom';

export default function Card({ data }: { data: Project }) {
  const { category, title, description, techStack, stats } = data;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${data.title}`)}
      className='bg-white py-[56px] px-[48px] card-hover-border card-with-shadow max-w-[400px] border-1 border-neutral-200  w-full relative cursor-pointer transition-all duration-0.4 rounded-md hover:shadow-lg'
    >
      <div className='text-[11px] text-neutral-500 tracking-[1.5px] font-medium uppercase mb-[20px]'>
        {category}
      </div>
      <h3 className='text-lg font-light text-neutral-900 mb-[16px] tracking-wide'>
        {title}
      </h3>
      <p className='text-sm text-neutral-600 mb-[28px] '>{description}</p>
      <div className='flex flex-wrap gap-[10px] mb-[28px]'>
        <span className='text-sm text-neutral-600 bg-neutral-50 py-[6px] px-[14px] border border-neutral-200 rounded-lg tracking-tight font-normal transition-all duration-0.4'>
          {techStack[0]}
        </span>
        <span className='text-sm text-neutral-600 bg-neutral-50 py-[6px] px-[14px] border border-neutral-200 rounded-lg tracking-tight font-normal transition-all duration-0.4'>
          {techStack[1]}
        </span>
        <span className='text-sm text-neutral-600 bg-neutral-50 py-[6px] px-[14px] border border-neutral-200 rounded-lg tracking-tight font-normal transition-all duration-0.4'>
          {techStack[2]}
        </span>
        <span className='text-sm text-neutral-600 bg-neutral-50 py-[6px] px-[14px] border border-neutral-200 rounded-lg tracking-tight font-normal transition-all duration-0.4'>
          {techStack[3]}
        </span>
      </div>

      <div className='flex text-sm gap-[24px] pt-[24px] border-t-1 border-neutral-200 text-neutral-500 tubular-nums'>
        <span className='m-0 p-0 border-border'>{stats.stars} stars</span>
        <span>{stats.forks} forks</span>
        <span>{stats.lastUpdated} </span>
      </div>
    </div>
  );
}
