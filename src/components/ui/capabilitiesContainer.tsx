import CapabilitiesCard from './capabilitiesCard';

export interface Capabilities {
  name: string;
  level: string;
}
const dummyCapabilities: Capabilities[] = [
  { name: 'TypeScript', level: 'Expert' },
  { name: 'React', level: 'Expert' },
  { name: 'Node.js', level: 'Expert' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'Python', level: 'Advanced' },
  { name: 'PostgreSQL', level: 'Advanced' },
  { name: 'Redis', level: 'Proficient' },
  { name: 'Docker', level: 'Proficient' },
  { name: 'AWS', level: 'Proficient' },
  { name: 'GraphQL', level: 'Proficient' },
];

export default function capabilitiesContainer() {
  const data = dummyCapabilities;
  return (
    <div className='grid grid-cols-5 gap-[4px] bg-neutral-50 overflow-hidden rounded-lg border-1 border-neutral-200'>
      {data.map((item) => (
        <CapabilitiesCard key={item.name} data={item} />
      ))}
    </div>
  );
}
