import { ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className=' flex items-center gap-2 text-sm sm:text-sm text-neutral-900 font-light py-2 sm:py-2 px-4 sm:px-4 border border-neutral-200 rounded-full my-2 transition-all duration-300 bg-white hover:shadow-lg cursor-pointer'
    >
      <ArrowLeftIcon className='w-4 h-4 sm:w-5 sm:h-5' />
      Back
    </button>
  );
}
