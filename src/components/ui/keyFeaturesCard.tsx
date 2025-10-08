import type { KeyFeatures } from '../../pages/ProjectDetails';

export default function keyFeaturesCard({ data }: { data: KeyFeatures }) {
  const { feature, detail } = data;
  return (
    <div className='bg-white py-[48px] px-[40px] border-1 border-neutral-200 rounded-lg'>
      <h3 className='text-lg font-light text-neutral-900 tracking-wide'>
        {feature}
      </h3>
      <p className='text-sm text-neutral-600 font-light'>{detail}</p>
    </div>
  );
}
