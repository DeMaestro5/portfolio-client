import Activities from '../components/sections/Activities';
import Hero from '../components/sections/Hero';
import Work from '../components/sections/Work';
import Divider from '../components/ui/divider';
import Capabilities from '../components/sections/Capabilities';

export default function Home() {
  return (
    <div className='max-w-screen mx-auto h-screen px-24 border-stone-200 rounded-t-md'>
      <Hero />
      <Divider />
      <Work />
      <Divider />
      <Activities />
      <Divider />
      <Capabilities />
    </div>
  );
}
