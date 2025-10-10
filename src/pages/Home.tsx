import Activities from '../components/sections/Activities';
import Hero from '../components/sections/Hero';
import Work from '../components/sections/Work';
import Divider from '../components/ui/divider';
import Capabilities from '../components/sections/Capabilities';
import Metrics from '../components/sections/Metrics';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import { useGithub } from '../context/github/useGithub';
import { useEffect } from 'react';

export default function Home() {
  const { state, fetchProfile } = useGithub();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (state.profile.loading) {
    return <div>Loading...</div>;
  }

  if (state.profile.error) {
    return <div>Error: {state.profile.error}</div>;
  }
  console.log(state.profile.data);

  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-stone-200 rounded-t-md'>
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
