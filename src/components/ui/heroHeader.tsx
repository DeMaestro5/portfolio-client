export default function heroHeader({
  title,
  heading,
  description,
}: {
  title: string;
  heading: string;
  description: string;
}) {
  return (
    <>
      <div className='pt-[120px] pb-[40px]'>
        <div className='text-xs tracking-widest text-gray-400 uppercase mb-8'>
          {title}
        </div>
        <h1 className='text-7xl font-extralight text-neutral-900 mb-6 tracking-[-4px]'>
          {heading}
        </h1>
        <p className='text-base font-light mb-[64px] tracking-[-0.2px] max-w-[600px] text-neutral-600 font-mono'>
          {description}
        </p>
      </div>
    </>
  );
}
