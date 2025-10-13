interface LoaderProps {
  variant?: 'skeleton' | 'spinner' | 'dots';
  className?: string;
  message?: string;
}

export default function Loader({
  variant = 'skeleton',
  className = '',
  message,
}: LoaderProps) {
  if (variant === 'spinner') {
    return (
      <div
        className={`flex flex-col items-center justify-center min-h-[50vh] ${className}`}
      >
        <div className='w-12 h-12 border-4 border-neutral-200 border-t-neutral-900 rounded-full animate-spin' />
        {message && <p className='mt-4 text-sm text-neutral-500'>{message}</p>}
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div
        className={`flex flex-col items-center justify-center min-h-[50vh] ${className}`}
      >
        <div className='flex gap-2'>
          <div
            className='w-3 h-3 bg-neutral-900 rounded-full animate-bounce'
            style={{ animationDelay: '0ms' }}
          />
          <div
            className='w-3 h-3 bg-neutral-900 rounded-full animate-bounce'
            style={{ animationDelay: '150ms' }}
          />
          <div
            className='w-3 h-3 bg-neutral-900 rounded-full animate-bounce'
            style={{ animationDelay: '300ms' }}
          />
        </div>
        {message && <p className='mt-4 text-sm text-neutral-500'>{message}</p>}
      </div>
    );
  }

  // Default: skeleton variant (you can customize per page)
  return (
    <div className={`animate-pulse space-y-4 ${className}`}>
      <div className='h-8 bg-neutral-200 rounded w-3/4' />
      <div className='h-4 bg-neutral-200 rounded w-1/2' />
      <div className='space-y-2'>
        <div className='h-4 bg-neutral-200 rounded' />
        <div className='h-4 bg-neutral-200 rounded w-5/6' />
      </div>
    </div>
  );
}
