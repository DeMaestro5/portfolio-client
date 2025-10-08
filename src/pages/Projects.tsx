import Container from '../components/ui/container';
import HeroHeader from '../components/ui/heroHeader';

export default function Projects() {
  return (
    <div className='max-w-screen h-screen mx-auto px-[40px]'>
      <div className='border-1 border-stone-200 rounded-t-md mx-16 px-24 '>
        <HeroHeader
          title='home/projects'
          heading='All Projects'
          description='A collection of projects showcasing full-stack development, real-time systems, and modern web technologies'
        />
        <div className='flex justify-between items-center py-8 border-y-1 border-neutral-200'>
          <div className='text-sm text-neutral-500'>showing 8 projects</div>
          <div className='flex gap-2'>
            <button className='text-sm text-neutral-500 border border-neutral-200 rounded-lg px-4 py-2 hover:bg-neutral-900 hover:text-white'>
              All
            </button>
            <button className='text-sm text-neutral-500 border border-neutral-200 rounded-lg px-4 py-2 hover:bg-neutral-900 hover:text-white'>
              Frontend
            </button>
            <button className='text-sm text-neutral-500 border border-neutral-200 rounded-lg px-4 py-2 hover:bg-neutral-900 hover:text-white'>
              Backend
            </button>
            <button className='text-sm text-neutral-500 border border-neutral-200 rounded-lg px-4 py-2 hover:bg-neutral-900 hover:text-white'>
              Full-stack
            </button>
          </div>
        </div>
        <div className='py-8'>
          <Container />
        </div>
      </div>
    </div>
  );
}
