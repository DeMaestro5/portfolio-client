import Card from './card';

export interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  techStack: string[];
  stats: {
    stars: number;
    forks: number;
    lastUpdated: string;
  };
  featured: boolean;
}

export const dummyProjects: Project[] = [
  {
    id: 1,
    category: 'REAL-TIME · BACKEND',
    title: 'Portfolio Server',
    description:
      'Real-time GitHub integration with WebSocket updates and intelligent caching layer',
    techStack: ['TypeScript', 'Node.js', 'Redis', 'Socket.IO'],
    stats: {
      stars: 45,
      forks: 12,
      lastUpdated: '2d ago',
    },
    featured: true,
  },
  {
    id: 2,
    category: 'FRONTEND · DASHBOARD',
    title: 'Analytics Platform',
    description:
      'Interactive data visualization with real-time metrics and beautiful charts',
    techStack: ['React', 'D3.js', 'Tailwind', 'TypeScript'],
    stats: {
      stars: 32,
      forks: 8,
      lastUpdated: '5d ago',
    },
    featured: true,
  },
  {
    id: 3,
    category: 'AI · BACKEND',
    title: 'Smart Assistant',
    description:
      'Natural language processing with contextual understanding and learning capabilities',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    stats: {
      stars: 28,
      forks: 5,
      lastUpdated: '1w ago',
    },
    featured: true,
  },
  {
    id: 4,
    category: 'FULL-STACK · SAAS',
    title: 'Project Manager',
    description:
      'Team collaboration with real-time updates and intelligent task management',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Redis'],
    stats: {
      stars: 67,
      forks: 15,
      lastUpdated: '3d ago',
    },
    featured: true,
  },
  {
    id: 5,
    category: 'MOBILE · FRONTEND',
    title: 'Fitness Tracker',
    description:
      'Cross-platform mobile app for real-time activity tracking and analytics',
    techStack: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    stats: {
      stars: 54,
      forks: 10,
      lastUpdated: '4d ago',
    },
    featured: false,
  },
  {
    id: 6,
    category: 'BACKEND · API',
    title: 'Payment Gateway',
    description:
      'Secure and scalable payment gateway with webhook support and fraud detection',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Stripe API'],
    stats: {
      stars: 73,
      forks: 21,
      lastUpdated: '1d ago',
    },
    featured: true,
  },
  {
    id: 7,
    category: 'FRONTEND · UI KIT',
    title: 'Component Library',
    description:
      'Reusable React components with accessibility and dark mode built-in',
    techStack: ['React', 'Storybook', 'Tailwind', 'TypeScript'],
    stats: {
      stars: 41,
      forks: 9,
      lastUpdated: '6d ago',
    },
    featured: false,
  },
  {
    id: 8,
    category: 'DEVTOOLS · CLI',
    title: 'Project Scaffolder',
    description:
      'CLI tool to scaffold modern web apps with opinionated configurations',
    techStack: ['Node.js', 'Commander.js', 'Inquirer', 'ESBuild'],
    stats: {
      stars: 89,
      forks: 25,
      lastUpdated: '2w ago',
    },
    featured: true,
  },
  {
    id: 9,
    category: 'DATA · VISUALIZATION',
    title: 'Stock Market Dashboard',
    description:
      'Real-time stock data visualization with streaming updates and alerts',
    techStack: ['React', 'WebSocket', 'D3.js', 'Tailwind'],
    stats: {
      stars: 36,
      forks: 7,
      lastUpdated: '3d ago',
    },
    featured: false,
  },
  {
    id: 10,
    category: 'AI · FULL-STACK',
    title: 'Image Classifier',
    description:
      'Web app for uploading and classifying images using custom AI models',
    techStack: ['Next.js', 'TensorFlow.js', 'Tailwind', 'Vercel'],
    stats: {
      stars: 62,
      forks: 14,
      lastUpdated: '5d ago',
    },
    featured: true,
  },
  {
    id: 11,
    category: 'SECURITY · BACKEND',
    title: 'Auth Service',
    description:
      'Centralized authentication and authorization microservice with OAuth2 support',
    techStack: ['Go', 'PostgreSQL', 'JWT', 'gRPC'],
    stats: {
      stars: 48,
      forks: 11,
      lastUpdated: '1w ago',
    },
    featured: false,
  },
  {
    id: 12,
    category: 'FULL-STACK · E-COMMERCE',
    title: 'ShopSphere',
    description:
      'End-to-end e-commerce solution with shopping cart, payments, and admin dashboard',
    techStack: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    stats: {
      stars: 97,
      forks: 31,
      lastUpdated: '2d ago',
    },
    featured: true,
  },
  {
    id: 13,
    category: 'IOT · REAL-TIME',
    title: 'Home Automation Hub',
    description:
      'Control and monitor smart devices with real-time dashboards and alerts',
    techStack: ['MQTT', 'Node.js', 'React', 'Redis'],
    stats: {
      stars: 44,
      forks: 13,
      lastUpdated: '3d ago',
    },
    featured: false,
  },
  {
    id: 14,
    category: 'EDTECH · FRONTEND',
    title: 'Learning Platform',
    description:
      'Interactive learning platform with quizzes, progress tracking, and gamification',
    techStack: ['React', 'Tailwind', 'Supabase', 'TypeScript'],
    stats: {
      stars: 58,
      forks: 17,
      lastUpdated: '6d ago',
    },
    featured: true,
  },
  {
    id: 15,
    category: 'MEDIA · BACKEND',
    title: 'Video Streaming API',
    description:
      'Scalable API for video uploads, transcoding, and adaptive streaming',
    techStack: ['Node.js', 'FFmpeg', 'S3', 'PostgreSQL'],
    stats: {
      stars: 77,
      forks: 22,
      lastUpdated: '1w ago',
    },
    featured: true,
  },
  {
    id: 16,
    category: 'TOOLS · EXTENSION',
    title: 'Dev Helper Chrome Extension',
    description:
      'Browser extension for productivity and debugging tools for developers',
    techStack: ['JavaScript', 'Manifest V3', 'Tailwind', 'Vite'],
    stats: {
      stars: 34,
      forks: 6,
      lastUpdated: '4d ago',
    },
    featured: false,
  },
  {
    id: 17,
    category: 'AI · NLP',
    title: 'Chatbot Engine',
    description:
      'Customizable NLP chatbot engine with context memory and intent recognition',
    techStack: ['Python', 'FastAPI', 'spaCy', 'Redis'],
    stats: {
      stars: 63,
      forks: 19,
      lastUpdated: '2w ago',
    },
    featured: true,
  },
  {
    id: 18,
    category: 'OPEN SOURCE · BACKEND',
    title: 'REST Boilerplate',
    description:
      'Production-ready REST API boilerplate with authentication and testing built-in',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Jest'],
    stats: {
      stars: 84,
      forks: 28,
      lastUpdated: '1d ago',
    },
    featured: false,
  },
  {
    id: 19,
    category: 'BLOCKCHAIN · DAPP',
    title: 'NFT Marketplace',
    description:
      'Decentralized marketplace for minting, buying, and selling NFTs',
    techStack: ['Solidity', 'Next.js', 'Ethers.js', 'IPFS'],
    stats: {
      stars: 56,
      forks: 16,
      lastUpdated: '5d ago',
    },
    featured: true,
  },
  {
    id: 20,
    category: 'FULL-STACK · SOCIAL',
    title: 'Microblog Platform',
    description:
      'Lightweight microblogging platform with real-time notifications and follow system',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO'],
    stats: {
      stars: 71,
      forks: 20,
      lastUpdated: '3d ago',
    },
    featured: true,
  },
];

export default function container() {
  const data = dummyProjects;
  return (
    <div className='grid grid-cols-4 justify-items-center gap-[16px] bg-neutral-50 overflow-hidden'>
      {data.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
}
