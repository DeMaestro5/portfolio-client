import { useParams } from 'react-router-dom';
import HeroHeader from '../components/ui/heroHeader';
import ProjectActivity from '../components/ui/projectActivity';
import RelatedProjectCard from '../components/ui/relatedProjectCard';
import BuiltWith from '../components/ui/builtWith';
import KeyFeaturesCard from '../components/ui/keyFeaturesCard';

export interface RelatedProject {
  label: string;
  detail: string;
}

export interface KeyFeatures {
  feature: string;
  detail: string;
}

const keyFeatures: KeyFeatures[] = [
  {
    feature: 'web integration',
    detail:
      'Integrate your website with our platform to enable seamless communication and collaboration.',
  },
  {
    feature: 'responsive design',
    detail:
      'Create responsive designs that work across all devices and screen sizes.',
  },
  {
    feature: 'customizable',
    detail: 'Customize your website to fit your brand and style.',
  },
  {
    feature: 'performance',
    detail:
      'Optimize your website for fast loading times and smooth user experience.',
  },
];

export interface Commit {
  message: string;
  author: string;
  timestamp: string;
}

export interface TechStack {
  techStack: string[];
}

const techStack = [
  'React',
  'Next.js',
  'Tailwind',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Redis',
  'Docker',
  'AWS',
  'GraphQL',
];

const commits: Commit[] = [
  {
    message: 'Added GitHub webhook integration',
    author: 'Your Name',
    timestamp: '2 hours ago',
  },
  {
    message: 'Improved caching strategy with Redis',
    author: 'Your Name',
    timestamp: '1 week ago',
  },
  {
    message: 'Added real-time WebSocket support',
    author: 'Your Name',
    timestamp: '3 days ago',
  },
  {
    message: 'Initial project setup with TypeScript',
    author: 'Your Name',
    timestamp: '5 days ago',
  },
];

const relatedProject = [
  {
    label: 'Analytics Platform',
    detail:
      'Interactive data visualization with real-time metrics and beautiful charts',
  },
  {
    label: 'Smart Assistant',
    detail:
      'Natural language processing with contextual understanding and learning capabilities',
  },
  {
    label: 'Project Manager',
    detail:
      'Team collaboration with real-time updates and intelligent task management',
  },
];
export default function ProjectDetails() {
  const { name } = useParams();
  const data = commits;
  const relatedProjects = relatedProject;
  const techData = techStack;
  const featureData = keyFeatures;

  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-stone-200 rounded-t-md '>
        <HeroHeader
          title={`home/projects/${name}`}
          heading={name}
          description='Interactive data visualization with real-time metrics and beautiful charts'
        />
        <div className='flex flex-wrap gap-3 sm:gap-4 pb-10 sm:pb-12 md:pb-16'>
          <button className='text-sm sm:text-base text-neutral-900 font-light py-2 sm:py-3 px-4 sm:px-6 border border-neutral-200 rounded-lg transition-all duration-300 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'>
            View on GitHub
          </button>
          <button className='text-sm sm:text-base text-neutral-900 font-light py-2 sm:py-3 px-4 sm:px-6 border border-neutral-200 rounded-lg transition-all duration-300 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'>
            Live Demo
          </button>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-14 md:mb-16 border-y border-neutral-200 py-6 sm:py-8'>
          <div className='flex flex-col gap-2'>
            <div className='text-[11px] text-neutral-500 tracking-widest font-medium uppercase'>
              STARS
            </div>
            <div className='text-base sm:text-lg font-semibold text-neutral-900 tracking-tight leading-none mb-2'>
              45
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-[11px] text-neutral-500 tracking-widest font-medium uppercase'>
              FORKS
            </div>
            <div className='text-base sm:text-lg font-semibold text-neutral-900 tracking-tight leading-none mb-2'>
              12
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-[11px] text-neutral-500 tracking-widest font-medium uppercase'>
              LAST UPDATED
            </div>
            <div className='text-base sm:text-lg font-semibold text-neutral-900 tracking-tight leading-none mb-2'>
              2d ago
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-[11px] text-neutral-500 tracking-widest font-medium uppercase'>
              LANGUAGE
            </div>
            <div className='text-base sm:text-lg font-semibold text-neutral-900 tracking-tight leading-none mb-2'>
              TypeScript
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6 '>
          <p className='text-[11px] text-neutral-500 font-medium uppercase mb-4 sm:mb-6 border-b-2 border-neutral-200 pb-6 sm:pb-8'>
            recent commits
          </p>
          {data.map((item) => (
            <ProjectActivity key={item.message} data={item} />
          ))}
        </div>
        <div className='py-10 sm:py-12 md:py-16'>
          <p className='text-[11px] text-neutral-500 font-medium uppercase mb-4 sm:mb-6 border-b-2 border-neutral-200 pb-6 sm:pb-8'>
            related projects
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            {relatedProjects.map((item) => (
              <RelatedProjectCard key={item.label} data={item} />
            ))}
          </div>
        </div>
        <div className='py-10 sm:py-12 md:py-16'>
          <p className='text-[11px] text-neutral-500 font-medium uppercase mb-4 sm:mb-6'>
            Built with
          </p>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2 md:gap-3'>
            {techData.map((item: string) => (
              <BuiltWith key={item} data={{ techStack: [item] }} />
            ))}
          </div>
        </div>
        <div className='py-10 sm:py-12 md:py-16'>
          <p className='text-[11px] text-neutral-500 font-medium uppercase mb-4 sm:mb-6'>
            key features
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2'>
            {featureData.map((item: KeyFeatures) => (
              <KeyFeaturesCard key={item.feature} data={item} />
            ))}
          </div>
        </div>
        <div className='border border-neutral-200 mb-12 sm:mb-14 md:mb-16'></div>
        <div className='py-8 sm:py-10'>
          <p className='text-[11px] text-neutral-500 font-medium uppercase mb-4 sm:mb-6'>
            Documentation
          </p>
          <div className='flex flex-col gap-4 sm:gap-5 bg-white p-6 sm:p-8 md:p-10 border border-neutral-200 rounded-lg'>
            <h2 className='text-2xl sm:text-3xl font-light text-neutral-900 tracking-wide pb-4'>
              Getting Started
            </h2>
            <p className='text-sm text-neutral-600 font-light pb-4'>
              This project provides a complete guide to getting started with the
              project. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.
            </p>
            <div className='text-xl sm:text-2xl text-neutral-600 font-light pb-4'>
              Installation
            </div>
            <div className='bg-neutral-900 p-4 sm:p-5 text-white rounded-lg'>
              <p className='text-sm font-light font-mono'>npm install</p>
              <p className='text-sm font-light font-mono'>npm run dev</p>
            </div>
            <div className='text-sm text-neutral-600 font-light pb-4 pt-4'>
              Configure your environment variables in <span>.env</span>file with
              your Github token and other credentials
            </div>
            <p className='text-xl sm:text-2xl text-neutral-600 font-light pb-4'>
              API Endpoints
            </p>
            <p className='text-sm text-neutral-600 font-light pb-4'>
              This project provides a complete guide to getting started with the
              project. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
