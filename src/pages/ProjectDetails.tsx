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
    <div className='max-w-screen h-screen mx-auto px-[40px]'>
      <div className='border-1 border-stone-200 rounded-t-md mx-16 px-24 '>
        <HeroHeader
          title={`home/projects/${name}`}
          heading={name}
          description='Interactive data visualization with real-time metrics and beautiful charts'
        />
        <div className='flex gap-[16px] pb-[60px]'>
          <button className='text-lg text-neutral-900 font-light py-[16px] px-[30px] border border-neutral-200 rounded-lg transition-all duration-0.3 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'>
            View on GitHub
          </button>
          <button className='text-lg text-neutral-900 font-light py-[16px] px-[30px] border border-neutral-200 rounded-lg transition-all duration-0.3 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'>
            Live Demo
          </button>
        </div>
        <div className='flex gap-[32px] mb-[60px] border-y-1 border-neutral-200 py-[40px]'>
          <div className='flex flex-col gap-[16px]'>
            <div className='text-[11px] text-neutral-500 tracking-widest font-medium uppercase'>
              STARS
            </div>
            <div className='text-sm font-semibold text-neutral-900 tracking-[-20x] leading-none mb-[16px]'>
              45
            </div>
          </div>
          <div className='flex flex-col gap-[16px]'>
            <div className='text-[11px] text-neutral-500 tracking-widest font-medium uppercase'>
              FORKS
            </div>
            <div className='text-sm font-semibold text-neutral-900 tracking-[-20x] leading-none mb-[16px]'>
              12
            </div>
          </div>
          <div className='flex flex-col gap-[16px]'>
            <div className='text-[11px] text-neutral-500 tracking-widest font-medium uppercase'>
              LAST UPDATED
            </div>
            <div className='text-sm font-semibold text-neutral-900 tracking-[-20x] leading-none mb-[16px]'>
              2d ago
            </div>
          </div>
          <div className='flex flex-col gap-[16px]'>
            <div className='text-[11px] text-neutral-500 tracking-widest font-medium uppercase'>
              LANGUAGE
            </div>
            <div className='text-sm font-semibold text-neutral-900 tracking-[-20x] leading-none mb-[16px]'>
              TypeScript
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[24px] '>
          <p className='text-[11px] text-neutral-500 font-medium uppercase mb-[16px] border-b-2 border-neutral-200 pb-[32px]'>
            recent commits
          </p>
          {data.map((item) => (
            <ProjectActivity key={item.message} data={item} />
          ))}
        </div>
        <div className='py-[60px]'>
          <p className='text-[11px] text-neutral-500 font-medium uppercase mb-[16px] border-b-2 border-neutral-200 pb-[32px]'>
            related projects
          </p>
          <div className='grid grid-cols-3 gap-[16px]'>
            {relatedProjects.map((item) => (
              <RelatedProjectCard key={item.label} data={item} />
            ))}
          </div>
        </div>
        <div className='py-[60px]'>
          <p className='text-[11px] text-neutral-500 font-medium uppercase mb-[16px] pb-[32px]'>
            Built with
          </p>
          <div className='grid grid-cols-5 gap-[1px]'>
            {techData.map((item: string) => (
              <BuiltWith key={item} data={{ techStack: [item] }} />
            ))}
          </div>
        </div>
        <div className='py-[60px]'>
          <p className='text-[11px] text-neutral-500 font-medium uppercase mb-[16px] pb-[32px]'>
            key features
          </p>
          <div className='grid grid-cols-2 gap-[4px]'>
            {featureData.map((item: KeyFeatures) => (
              <KeyFeaturesCard key={item.feature} data={item} />
            ))}
          </div>
        </div>
        <div className='border-1 border-neutral-200 mb-[60px]'></div>
        <div className='py-[40px]'>
          <p className='text-[11px] text-neutral-500 font-medium uppercase mb-[16px] pb-[16px]'>
            Documentation
          </p>
          <div className='flex flex-col gap-[16px] bg-white p-[40px] border-1 border-neutral-200 rounded-lg'>
            <h2 className='text-3xl font-light text-neutral-900 tracking-wide pb-[16px]'>
              Getting Started
            </h2>
            <p className='text-sm text-neutral-600 font-light pb-[16px]'>
              This project provides a complete guide to getting started with the
              project. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.
            </p>
            <div className='text-2xl text-neutral-600 font-light pb-[16px]'>
              Installation
            </div>
            <div className='bg-neutral-900 p-[24px] text-white rounded-lg'>
              <p className='text-sm font-light font-mono'>npm install</p>
              <p className='text-sm font-light font-mono'>npm run dev</p>
            </div>
            <div className='text-sm text-neutral-600 font-light pb-[16px] pt-[16px]'>
              Configure your environment variables in <span>.env</span>file with
              your Github token and other credentials
            </div>
            <p className='text-2xl text-neutral-600 font-light pb-[16px]'>
              API Endpoints
            </p>
            <p className='text-sm text-neutral-600 font-light pb-[16px]'>
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
