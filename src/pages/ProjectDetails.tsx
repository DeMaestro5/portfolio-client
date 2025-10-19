import { useParams } from 'react-router-dom';
import HeroHeader from '../components/ui/heroHeader';
import ProjectActivity from '../components/ui/projectActivity';
import RelatedProjectCard from '../components/ui/relatedProjectCard';
import BuiltWith from '../components/ui/builtWith';
import KeyFeaturesCard from '../components/ui/keyFeaturesCard';
import { useEffect } from 'react';
import Loader from '../components/ui/loader';
import ErrorState from '../components/ui/error';
import { useProjects } from '../context/projects/useProject';
import { formatDate } from '../components/helpers/formatDate';
import BackButton from '../components/ui/backButton';

export default function ProjectDetails() {
  const { state, fetchProjectById } = useProjects();
  const { loading, error, data } = state.projectById;
  const { id } = useParams();
  const projectId = Number(id);

  useEffect(() => {
    if (projectId && !isNaN(projectId)) {
      fetchProjectById(projectId);
    }
  }, [fetchProjectById, projectId]);

  // Validate projectId after hooks
  if (!projectId || isNaN(projectId)) {
    return (
      <ErrorState
        message='Invalid project ID. Please check the URL and try again.'
        onRetry={() => window.location.replace('/projects')}
      />
    );
  }

  if (loading || !data) return <Loader />;
  if (error)
    return (
      <ErrorState message={error} onRetry={() => fetchProjectById(projectId)} />
    );

  // Transform commits data
  const transformedCommits = data.commits?.map((commit) => ({
    message: commit.message,
    author: commit.author.name,
    timestamp: commit.author.date,
  }));
  const recentCommits = transformedCommits?.slice(0, 10);

  // Transform related projects data
  const transformedRelatedProjects = data.relatedProjects?.map((project) => ({
    label: project.name,
    detail: project.description || 'No description available',
  }));

  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-stone-200 rounded-t-lg '>
        <BackButton />
        <HeroHeader
          title={`projects | ${data.name}`}
          heading={data.name}
          description={data.description || 'No description available'}
        />
        <div className='flex flex-wrap gap-3 sm:gap-4 pb-10 sm:pb-12 md:pb-16'>
          {data.html_url && (
            <a
              href={data.html_url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm sm:text-base text-neutral-900 font-light py-2 sm:py-3 px-4 sm:px-6 border border-neutral-200 rounded-lg transition-all duration-300 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'
            >
              View on GitHub
            </a>
          )}
          {data.demo_url && (
            <a
              href={data.demo_url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm sm:text-base text-neutral-900 font-light py-2 sm:py-3 px-4 sm:px-6 border border-neutral-200 rounded-lg transition-all duration-300 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'
            >
              Live Demo
            </a>
          )}
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-14 md:mb-16 border-y border-neutral-200 py-6 sm:py-8'>
          <div className='flex flex-col gap-2'>
            <div className='text-[11px] text-neutral-500 tracking-widest font-medium uppercase'>
              STARS
            </div>
            <div className='text-base sm:text-lg font-semibold text-neutral-900 tracking-tight leading-none mb-2'>
              {data.stargazers_count ?? 0}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-[11px] text-neutral-500 tracking-widest font-medium uppercase'>
              FORKS
            </div>
            <div className='text-base sm:text-lg font-semibold text-neutral-900 tracking-tight leading-none mb-2'>
              {data.forks_count ?? 0}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-[11px] text-neutral-500 tracking-widest font-medium uppercase'>
              LAST UPDATED
            </div>
            <div className='text-base sm:text-lg font-semibold text-neutral-900 tracking-tight leading-none mb-2'>
              {data.updated_at ? formatDate(data.updated_at) : 'N/A'}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-[11px] text-neutral-500 tracking-widest font-medium uppercase'>
              LANGUAGE
            </div>
            <div className='text-base sm:text-lg font-semibold text-neutral-900 tracking-tight leading-none mb-2'>
              {data.language || 'Not specified'}
            </div>
          </div>
        </div>
        {/* Recent Commits Section */}
        <div className='flex flex-col gap-6 py-10 sm:py-12 md:py-16'>
          <p className='text-[11px] text-neutral-500 font-medium uppercase mb-4 sm:mb-6 border-b-2 border-neutral-200 pb-6 sm:pb-8'>
            recent commits
          </p>
          {recentCommits && recentCommits.length > 0 ? (
            recentCommits.map((item, index) => (
              <ProjectActivity
                key={`${item.author}-${item.timestamp}-${index}`}
                data={item}
              />
            ))
          ) : (
            <p className='text-sm text-neutral-500 italic'>
              No recent commits available
            </p>
          )}
        </div>

        {/* Related Projects Section */}
        {transformedRelatedProjects &&
          transformedRelatedProjects.length > 0 && (
            <div className='py-10 sm:py-12 md:py-16'>
              <p className='text-[11px] text-neutral-500 font-medium uppercase mb-4 sm:mb-6 border-b-2 border-neutral-200 pb-6 sm:pb-8'>
                related projects
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
                {transformedRelatedProjects.map((item, index) => (
                  <RelatedProjectCard
                    key={`${item.label}-${index}`}
                    data={item}
                  />
                ))}
              </div>
            </div>
          )}

        {/* Tech Stack Section */}
        {data.builtWith && data.builtWith.length > 0 && (
          <div className='py-10 sm:py-12 md:py-16'>
            <p className='text-[11px] text-neutral-500 font-medium uppercase mb-4 sm:mb-6'>
              Built with
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2 md:gap-3'>
              {data.builtWith.map((item: string) => (
                <BuiltWith key={item} data={{ tech: item }} />
              ))}
            </div>
          </div>
        )}

        {/* Key Features Section */}
        {data.keyFeatures && data.keyFeatures.length > 0 && (
          <div className='py-10 sm:py-12 md:py-16'>
            <p className='text-[11px] text-neutral-500 font-medium uppercase mb-4 sm:mb-6'>
              key features
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2'>
              {data.keyFeatures.map((item) => (
                <KeyFeaturesCard key={item} data={{ feature: item }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
