
import React, { useState, useEffect } from 'react';
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
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger entrance animation after a short delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={cn(
      "hero-split",
      loaded ? "opacity-100" : "opacity-0",
      "transition-opacity duration-1000"
    )}>
      <Link 
        to={leftPath}
        className={cn(
          "hero-pane hero-pane-left",
          activePane === 'left' ? 'w-[60%]' : activePane === 'right' ? 'w-[40%]' : 'w-1/2'
        )}
        onMouseEnter={() => setActivePane('left')}
        onMouseLeave={() => setActivePane(null)}
      >
        <div className="w-full h-full relative overflow-hidden">
          <img 
            src={leftImage} 
            alt={leftTitle} 
            className={cn(
              "w-full h-full object-cover transition-transform duration-700",
              activePane === 'left' ? 'scale-105' : 'scale-100'
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className={cn(
            "absolute bottom-0 left-0 w-full p-8 text-white transition-all duration-700",
            activePane === 'left' ? 'translate-y-0' : 'translate-y-2'
          )}>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 transform transition-transform duration-700">
              {leftTitle}
            </h2>
            <div className={cn(
              "overflow-hidden",
              activePane === 'left' ? 'max-h-20' : 'max-h-0',
              "transition-all duration-700"
            )}>
              <p className="text-lg opacity-90 transform transition-all duration-700">
                Explore the collection
                <span className="ml-2 inline-block animate-pulse">→</span>
              </p>
            </div>
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
        <div className="w-full h-full relative overflow-hidden">
          <img 
            src={rightImage} 
            alt={rightTitle} 
            className={cn(
              "w-full h-full object-cover transition-transform duration-700",
              activePane === 'right' ? 'scale-105' : 'scale-100'
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className={cn(
            "absolute bottom-0 right-0 w-full p-8 text-white text-right transition-all duration-700",
            activePane === 'right' ? 'translate-y-0' : 'translate-y-2'
          )}>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 transform transition-transform duration-700">
              {rightTitle}
            </h2>
            <div className={cn(
              "overflow-hidden",
              activePane === 'right' ? 'max-h-20' : 'max-h-0',
              "transition-all duration-700"
            )}>
              <p className="text-lg opacity-90 transform transition-all duration-700">
                View the gallery
                <span className="ml-2 inline-block animate-pulse">→</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HeroSplit;
