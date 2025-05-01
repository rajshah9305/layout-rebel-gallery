
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
  const [leftImageError, setLeftImageError] = useState(false);
  const [rightImageError, setRightImageError] = useState(false);
  
  useEffect(() => {
    // Trigger entrance animation after a short delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleLeftImageError = () => {
    console.log(`Failed to load left hero image: ${leftImage}`);
    setLeftImageError(true);
  };
  
  const handleRightImageError = () => {
    console.log(`Failed to load right hero image: ${rightImage}`);
    setRightImageError(true);
  };
  
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
          {leftImageError ? (
            <div className="w-full h-full bg-gradient-to-br from-sky-700 to-sky-900 flex items-center justify-center">
              <p className="text-white text-xl">Night Skies</p>
            </div>
          ) : (
            <img 
              src={leftImage} 
              alt={leftTitle} 
              onError={handleLeftImageError}
              className={cn(
                "w-full h-full object-cover transition-transform duration-700",
                activePane === 'left' ? 'scale-105' : 'scale-100'
              )}
            />
          )}
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
          {rightImageError ? (
            <div className="w-full h-full bg-gradient-to-br from-sunset-700 to-sunset-500 flex items-center justify-center">
              <p className="text-white text-xl">Vibrant Sunsets</p>
            </div>
          ) : (
            <img 
              src={rightImage} 
              alt={rightTitle} 
              onError={handleRightImageError}
              className={cn(
                "w-full h-full object-cover transition-transform duration-700",
                activePane === 'right' ? 'scale-105' : 'scale-100'
              )}
            />
          )}
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
