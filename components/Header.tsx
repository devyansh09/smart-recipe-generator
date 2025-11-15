
import React from 'react';
import { LeafIcon } from './IconComponents';

interface HeaderProps {
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="bg-surface shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80"
          onClick={onLogoClick}
        >
          <LeafIcon className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Smart Recipe Generator
          </h1>
        </div>
      </div>
    </header>
  );
};
   