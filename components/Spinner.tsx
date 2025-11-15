
import React from 'react';
import { LeafIcon } from './IconComponents';

interface SpinnerProps {
  message: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ message }) => {
  return (
    <div className="fixed inset-0 bg-background bg-opacity-75 flex flex-col items-center justify-center z-50">
      <div className="text-center p-8 rounded-lg">
        <LeafIcon className="h-16 w-16 text-primary animate-bounce mx-auto" />
        <p className="mt-4 text-lg font-semibold text-text-primary">{message}</p>
        <p className="text-text-secondary text-sm">This may take a moment...</p>
      </div>
    </div>
  );
};
   