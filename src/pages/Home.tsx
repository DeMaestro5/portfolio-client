import Timeline from '../components/sections/Timeline';
import Hero from '../components/sections/Hero';
import FeaturedWork from '../components/sections/FeaturedWork';
import Divider from '../components/ui/divider';
import Capabilities from '../components/sections/Capabilities';
import Metrics from '../components/sections/Metrics';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import Navbar from '../components/ui/navbar';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-stone-200 rounded-t-md'>
        <Navbar />
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
