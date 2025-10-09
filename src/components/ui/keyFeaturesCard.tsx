import type { KeyFeatures } from '../../pages/ProjectDetails';

export default function keyFeaturesCard({ data }: { data: KeyFeatures }) {
  const { feature, detail } = data;
  return (
    <div className='bg-white py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:py-12 lg:px-10 border-1 border-neutral-200 rounded-lg'>
      <h3 className='text-lg font-light text-neutral-900 tracking-wide mb-2 break-words'>
        {feature}
      </h3>
      <p className='text-sm text-neutral-600 font-light break-words'>
        {detail}
      </p>
    </div>
  );
}
