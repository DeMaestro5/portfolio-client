export default function heroHeader({
  title,
  heading,
  description,
}: {
  title: string;
  heading: string | undefined;
  description: string;
}) {
  return (
    <>
      <div className='pt-16 sm:pt-20 md:pt-28 pb-6 sm:pb-8 md:pb-10'>
        <div className='text-[11px] sm:text-xs tracking-widest text-gray-400 uppercase mb-4 sm:mb-6 md:mb-8'>
          {title}
        </div>
        <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extralight text-neutral-900 mb-4 sm:mb-6 tracking-tight'>
          {heading}
        </h1>
        <p className='text-sm sm:text-base font-light mb-10 sm:mb-12 md:mb-16 tracking-tight max-w-[600px] text-neutral-600 font-mono'>
          {description}
        </p>
      </div>
    </>
  );
}
