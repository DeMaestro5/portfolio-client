export default function contact() {
  return (
    <section className='pt-[200px] pb-[120px] text-center '>
      <h2 className='text-7xl font-extralight text-neutral-900 tracking-[-3px] leading-none mb-[64px]'>
        Let's work together
      </h2>
      <div className='flex justify-center gap-[16px]'>
        <a
          className='text-lg text-neutral-900 font-light py-[16px] px-[32px] border border-neutral-200 rounded-lg transition-all duration-0.3 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'
          href='mailto:osstephen70@gmail.com'
        >
          Email
        </a>
        <a
          className='text-lg text-neutral-900 font-light py-[16px] px-[32px] border border-neutral-200 rounded-lg transition-all duration-0.3 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'
          href='https://www.linkedin.com/in/stephen-ossiakeme-52b979196/'
        >
          LinkedIn
        </a>
        <a
          className='text-lg text-neutral-900 font-light py-[16px] px-[32px] border border-neutral-200 rounded-lg transition-all duration-0.3 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'
          href='https://github.com/DeMaestro5'
        >
          GitHub
        </a>
        <a
          className='text-lg text-neutral-900 font-light py-[16px] px-[32px] border border-neutral-200 rounded-lg transition-all duration-0.3 bg-white hover:bg-neutral-900 cursor-pointer hover:text-white'
          href='/resume.pdf'
          download
        >
          Resume
        </a>
      </div>
    </section>
  );
}
