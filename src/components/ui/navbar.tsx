import Button from './button';

export default function navbar() {
  return (
    <div className='flex flex-wrap justify-center  gap-1.5 sm:gap-3 lg:gap-4 py-3 sm:py-6 px-2 sm:px-0'>
      <Button id='featured-work'>Featured Work</Button>
      <Button id='timeline'>Timeline</Button>
      <Button id='capabilities'>Capabilities</Button>
      <Button id='metrics'>Metrics</Button>
      <Button id='contact'>Contact</Button>
    </div>
  );
}
