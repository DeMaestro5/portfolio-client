export default function contact() {
  return (
    <section className='pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-16 sm:pb-20 md:pb-24 text-center '>
      <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight text-neutral-900 tracking-tight leading-none mb-8 sm:mb-12 md:mb-16'>
        Let's work together
      </h2>
      <div className='flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5'>
        <a
          className='text-sm sm:text-base text-neutral-900 font-light py-2 sm:py-3 px-4 sm:px-6 border border-neutral-200 rounded-lg transition-all duration-300 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'
          href='mailto:osstephen70@gmail.com'
        >
          Email
        </a>
        <a
          className='text-sm sm:text-base text-neutral-900 font-light py-2 sm:py-3 px-4 sm:px-6 border border-neutral-200 rounded-lg transition-all duration-300 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'
          href='https://www.linkedin.com/in/stephen-ossiakeme-52b979196/'
        >
          LinkedIn
        </a>
        <a
          className='text-sm sm:text-base text-neutral-900 font-light py-2 sm:py-3 px-4 sm:px-6 border border-neutral-200 rounded-lg transition-all duration-300 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'
          href='https://github.com/DeMaestro5'
        >
          GitHub
        </a>
        <a
          className='text-sm sm:text-base text-neutral-900 font-light py-2 sm:py-3 px-4 sm:px-6 border border-neutral-200 rounded-lg transition-all duration-300 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'
          href='/resume.pdf'
          download
        >
          Resume
        </a>
      </div>
    </section>
  );
}
