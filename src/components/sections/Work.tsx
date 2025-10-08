import Container from '../ui/container';
import Heading from '../ui/heading';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

export default function Work() {
  // const navigate = useNavigate();
  return (
    <section className='relative py-[100px]'>
      <div className='flex justify-between items-center mb-[80px]'>
        <Heading number='01' title='Selected Work' />
        <div className='flex items-center gap-[10px]'>
          <Link
            className=' flex items-center gap-[10px] text-sm text-neutral-900 font-light py-[16px] px-[32px] border border-neutral-200 rounded-lg transition-all duration-0.3 bg-white hover:shadow-lg'
            to='/projects'
          >
            View All Projects
          </Link>
          <ArrowRightIcon className='w-4 h-4' />
        </div>
      </div>
      <Container />
    </section>
  );
}
