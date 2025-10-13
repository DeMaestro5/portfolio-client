interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
  className?: string;
  variant?: 'default' | 'minimal' | 'card';
}

export default function ErrorState({
  message = 'Something went wrong. Please try again.',
  onRetry,
  className = '',
  variant = 'default',
}: ErrorStateProps) {
  if (variant === 'minimal') {
    return (
      <div className={`text-center py-8 ${className}`}>
        <p className='text-sm text-neutral-500'>{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className='mt-2 text-sm text-neutral-900 underline hover:no-underline'
          >
            Try again
          </button>
        )}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        className={`bg-red-50 border border-red-200 rounded-lg p-6 ${className}`}
      >
        <div className='flex items-start gap-3'>
          <div className='flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center'>
            <span className='text-white text-sm font-bold'>!</span>
          </div>
          <div className='flex-1'>
            <h3 className='text-sm font-medium text-red-900 mb-1'>Error</h3>
            <p className='text-sm text-red-700'>{message}</p>
            {onRetry && (
              <button
                onClick={onRetry}
                className='mt-3 px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors'
              >
                Retry
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[50vh] px-4 ${className}`}
    >
      <div className='text-center max-w-md'>
        {/* Error Icon */}
        <div className='w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center'>
          <svg
            className='w-8 h-8 text-neutral-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
            />
          </svg>
        </div>

        {/* Error Message */}
        <h3 className='text-lg font-medium text-neutral-900 mb-2'>
          Oops! Something went wrong
        </h3>
        <p className='text-sm text-neutral-500 mb-6'>{message}</p>

        {/* Retry Button */}
        {onRetry && (
          <button
            onClick={onRetry}
            className='px-6 py-2 bg-neutral-900 text-white text-sm rounded-lg hover:bg-neutral-800 transition-colors'
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
