
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroSplitProps {
  leftImage: string;
  rightImage: string;
  leftTitle: string;
  rightTitle: string;
  leftPath: string;
  rightPath: string;
}

const HeroSplit = ({ 
  leftImage, 
  rightImage, 
  leftTitle, 
  rightTitle,
  leftPath,
  rightPath
}: HeroSplitProps) => {
  const [activePane, setActivePane] = useState<'left' | 'right' | null>(null);
  
  return (
    <div className="hero-split">
      <Link 
        to={leftPath}
        className={cn(
          "hero-pane hero-pane-left",
          activePane === 'left' ? 'w-[60%]' : activePane === 'right' ? 'w-[40%]' : 'w-1/2'
        )}
        onMouseEnter={() => setActivePane('left')}
        onMouseLeave={() => setActivePane(null)}
      >
        <div className="w-full h-full relative">
          <img 
            src={leftImage} 
            alt={leftTitle} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{leftTitle}</h2>
            <p className="text-lg opacity-90">Explore the collection</p>
          </div>
        </div>
      </Link>
      
      <Link 
        to={rightPath}
        className={cn(
          "hero-pane hero-pane-right",
          activePane === 'right' ? 'w-[60%]' : activePane === 'left' ? 'w-[40%]' : 'w-1/2'
        )}
        onMouseEnter={() => setActivePane('right')}
        onMouseLeave={() => setActivePane(null)}
      >
        <div className="w-full h-full relative">
          <img 
            src={rightImage} 
            alt={rightTitle} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full p-8 text-white text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{rightTitle}</h2>
            <p className="text-lg opacity-90">View the gallery</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HeroSplit;
