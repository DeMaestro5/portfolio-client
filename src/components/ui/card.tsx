import { useNavigate } from 'react-router-dom';
import { ExternalLink, GitFork, Star, Calendar, Code2 } from 'lucide-react';
import type { CardProps } from '../../types/types';

export default function Card({ data }: CardProps) {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Updated today';
    if (diffDays === 1) return 'Updated yesterday';
    if (diffDays < 7) return `Updated ${diffDays} days ago`;
    if (diffDays < 30) return `Updated ${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365)
      return `Updated ${Math.floor(diffDays / 30)} months ago`;
    return `Updated ${Math.floor(diffDays / 365)} years ago`;
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'in development':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'archived':
        return 'bg-gray-50 text-gray-700 border-gray-200';
      default:
        return 'bg-neutral-50 text-neutral-700 border-neutral-200';
    }
  };

  return (
    <article
      onClick={() => navigate(`/projects/${data.id}`)}
      className='group relative bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 cursor-pointer overflow-hidden max-w-[400px] w-full'
    >
      <div className='mb-4'>
        <h3 className='text-xl font-medium text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors flex items-start justify-between gap-2'>
          <span className='line-clamp-1'>{data.name}</span>
          <ExternalLink className='w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors flex-shrink-0 mt-1' />
        </h3>

        {data.status && (
          <div className='inline-block mb-3'>
            <span
              className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${getStatusColor(
                data.status
              )}`}
            >
              {data.status}
            </span>
          </div>
        )}

        <p className='text-sm text-neutral-600 leading-relaxed line-clamp-2 min-h-[40px]'>
          {data.description || 'No description provided'}
        </p>
      </div>

      <div className='mb-4'>
        {data.language ? (
          <div className='flex items-center gap-2'>
            <Code2 className='w-4 h-4 text-neutral-400' />
            <span className='text-sm text-neutral-700 font-medium'>
              {data.language}
            </span>
            {data.technologies && data.technologies.length > 1 && (
              <span className='text-xs text-neutral-500'>
                +{data.technologies.length - 1} more
              </span>
            )}
          </div>
        ) : (
          <div className='flex items-center gap-2'>
            <Code2 className='w-4 h-4 text-neutral-300' />
            <span className='text-sm text-neutral-400 italic'>
              No language specified
            </span>
          </div>
        )}
      </div>

      <div className='flex items-center justify-between pt-4 border-t border-neutral-100'>
        <div className='flex items-center gap-4 text-sm text-neutral-600'>
          <div className='flex items-center gap-1.5'>
            <Star className='w-4 h-4' />
            <span>{data.stargazers_count ?? 0}</span>
          </div>
          <div className='flex items-center gap-1.5'>
            <GitFork className='w-4 h-4' />
            <span>{data.forks_count ?? 0}</span>
          </div>
        </div>

        <div className='flex items-center gap-1.5 text-xs text-neutral-500'>
          <Calendar className='w-3.5 h-3.5' />
          <span className='line-clamp-1'>
            {formatDate(data.updated_at || new Date().toISOString())}
          </span>
        </div>
      </div>

      <div className='absolute inset-0 border-2 border-transparent group-hover:border-neutral-900/5 rounded-xl transition-all duration-300 pointer-events-none' />
    </article>
  );
}
