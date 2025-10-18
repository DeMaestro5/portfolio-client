import Timeline from '../components/sections/Timeline';
import Hero from '../components/sections/Hero';
import FeaturedWork from '../components/sections/Work';
import Divider from '../components/ui/divider';
import Capabilities from '../components/sections/Capabilities';
import Metrics from '../components/sections/Metrics';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-stone-200 rounded-t-md'>
        <div className='flex justify-end gap-2'>
          <button>Featured Work</button>
          <button>Timeline</button>
          <button>Capabilities</button>
          <button>Metrics</button>
          <button>Contact</button>
        </div>
        <Hero />
        <Divider />
        <FeaturedWork />
        <Divider />
        <Timeline />
        <Divider />
        <Capabilities />
        <Divider />
        <Metrics />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
