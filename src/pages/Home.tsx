import Activities from '../components/sections/Activities';
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
        <Hero />
        <Divider />
        <FeaturedWork />
        <Divider />
        <Activities />
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
