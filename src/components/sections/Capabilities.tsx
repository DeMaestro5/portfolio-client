import CapabilitiesContainer from '../capabilities/capabilitiesContainer';
import Heading from '../ui/heading';
export default function Capabilities() {
  return (
    <section
      id='capabilities'
      className='relative py-12 sm:py-16 md:py-20 lg:py-24'
    >
      <Heading number='03' title='Capabilities' />
      <CapabilitiesContainer />
    </section>
  );
}
