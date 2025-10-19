import scrollToSection from '../helpers/scrollToSection';

export default function Button({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <button
      onClick={() => scrollToSection(id)}
      className='text-sm sm:text-sm text-neutral-900 font-light py-2 sm:py-2 px-4 sm:px-4 border border-neutral-200 rounded-full my-2 transition-all duration-300 bg-white hover:shadow-lg cursor-pointer'
    >
      {children}
    </button>
  );
}
