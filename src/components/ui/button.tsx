export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className='text-sm sm:text-base text-neutral-900 font-light py-2 sm:py-3 px-4 sm:px-6 border border-neutral-200 rounded-lg transition-all duration-300 bg-white hover:shadow-lg'>
      {children}
    </button>
  );
}
