import ActivityCard from '../ui/activityCard';
import Heading from '../ui/heading';

export interface Activity {
  id: number;
  type: string;
  message: string;
  repo: string;
  timestamp: string;
  live: boolean;
}

const dummyActivity: Activity[] = [
  {
    id: 1,
    type: 'PUSH',
    message: 'Added GitHub webhook integration',
    repo: 'portfolio-server',
    timestamp: '2 hours ago',
    live: true,
  },
  {
    id: 2,
    type: 'PULL REQUEST',
    message: 'Merged: Fix authentication bug',
    repo: 'analytics-platform',
    timestamp: '5 hours ago',
    live: false,
  },
  {
    id: 3,
    type: 'CREATE',
    message: 'Created new repository',
    repo: 'ai-assistant-v2',
    timestamp: 'Yesterday',
    live: false,
  },
  {
    id: 4,
    type: 'PUSH',
    message: 'Performance optimizations',
    repo: 'project-manager',
    timestamp: '2 days ago',
    live: false,
  },
];

export default function Activities() {
  const activity = dummyActivity;

  return (
    <section className='relative py-12 sm:py-16 md:py-20 lg:py-24'>
      <Heading number='02' title='Activities' />
      {activity.map((item) => (
        <ActivityCard key={item.id} activity={item} />
      ))}
    </section>
  );
}
