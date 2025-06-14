import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({ 
  size = 'md', 
  text = 'Chargement...', 
  fullScreen = false 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className={`${sizeClasses[size]} text-primary animate-spin mx-auto mb-4`} />
          <p className={`${textSizeClasses[size]} text-gray-600 font-medium`}>
            {text}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className={`${sizeClasses[size]} text-primary animate-spin mb-4`} />
      <p className={`${textSizeClasses[size]} text-gray-600 font-medium`}>
        {text}
      </p>
    </div>
  );
}