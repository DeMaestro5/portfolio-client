export default function heading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className='flex items-baseline gap-[32px] '>
      <div className='text-sm tracking-widest text-neutral-400 tubular-nums'>
        {number}
      </div>
      <div className='text-sm text-neutral-700 tracking-widest mb-[80px]'>
        {title}
      </div>
    </div>
  );
}
