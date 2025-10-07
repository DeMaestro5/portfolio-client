import Container from '../ui/container';

export default function Work() {
  return (
    <section className='relative py-[160px]'>
      <div className='flex items-baseline gap-[32px] '>
        <div className='text-sm tracking-widest text-neutral-400 tubular-nums'>
          01
        </div>
        <div className='text-sm text-neutral-700 tracking-widest mb-[80px]'>
          Selected Work
        </div>
      </div>
      <Container />
    </section>
  );
}
