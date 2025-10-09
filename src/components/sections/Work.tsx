import Container from '../ui/container';
import Heading from '../ui/heading';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

export default function Work() {
  return (
    <section className='relative py-12 sm:py-16 md:py-20 lg:py-24'>
      <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-8 md:mb-16 lg:mb-20 gap-4'>
        <Heading number='01' title='Selected Work' />
        <div className='flex items-center gap-[10px] hover:translate-x-1 transition-all duration-300'>
          <Link
            className=' flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-neutral-900 font-light py-2 sm:py-3 px-4 sm:px-6 border border-neutral-200 rounded-lg transition-all duration-300 bg-white hover:shadow-lg'
            to='/projects'
          >
            View All Projects
          </Link>
          <ArrowRightIcon className='w-4 h-4 sm:w-5 sm:h-5 ' />
        </div>
      </div>
      <Container />
    </section>
  );
}
