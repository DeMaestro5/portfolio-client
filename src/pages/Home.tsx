import Activities from '../components/sections/Activities';
import Hero from '../components/sections/Hero';
import Work from '../components/sections/Work';
import Divider from '../components/ui/divider';
import Capabilities from '../components/sections/Capabilities';
import Metrics from '../components/sections/Metrics';
import Contact from '../components/sections/contact';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <div className='max-w-screen h-screen  '>
      <div className='border-1 border-stone-200 rounded-t-md mx-16 px-24 m-4'>
        <Hero />
        <Divider />
        <Work />
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
