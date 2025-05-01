
import React, { useState } from 'react';
import { GalleryImage } from '@/data/galleryData';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Loader2, ImageOff } from 'lucide-react';

interface ImageCardProps {
  image: GalleryImage;
  onClick?: () => void;
  className?: string;
}

const ImageCard = ({ image, onClick, className }: ImageCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const handleImageError = () => {
    console.log(`Failed to load image: ${image.src}`);
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Generate a gradient based on the category
  const getCategoryGradient = () => {
    switch (image.category) {
      case 'mountains':
        return 'from-blue-300 to-green-200 dark:from-blue-900 dark:to-green-800';
      case 'sunset':
        return 'from-orange-300 to-red-200 dark:from-orange-900 dark:to-red-800';
      case 'night':
        return 'from-indigo-300 to-purple-200 dark:from-indigo-900 dark:to-purple-800';
      case 'water':
        return 'from-sky-300 to-cyan-200 dark:from-sky-900 dark:to-cyan-800';
      case 'skies':
        return 'from-sky-300 to-indigo-200 dark:from-sky-900 dark:to-indigo-800';
      case 'cityscape':
        return 'from-gray-300 to-slate-200 dark:from-gray-800 dark:to-slate-700';
      default:
        return 'from-sky-300 to-mountain-200 dark:from-sky-900 dark:to-mountain-800';
    }
  };

  return (
    <div 
      className={cn(
        "relative rounded-lg overflow-hidden shadow-lg group cursor-pointer",
        "transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
        "bg-white dark:bg-mountain-900",
        className
      )}
      onClick={onClick}
    >
      <div className="overflow-hidden">
        <AspectRatio ratio={4/3}>
          {imageError ? (
            <div className={cn(
              "w-full h-full flex flex-col items-center justify-center bg-gradient-to-br",
              getCategoryGradient()
            )}>
              <ImageOff className="h-8 w-8 text-white/70 mb-2" />
              <p className="text-white text-sm font-medium">Image not available</p>
              <p className="text-white/70 text-xs mt-1">{image.alt}</p>
            </div>
          ) : (
            <>
              {isLoading && (
                <div className={cn(
                  "absolute inset-0 flex items-center justify-center bg-gradient-to-br z-10",
                  getCategoryGradient()
                )}>
                  <Loader2 className="h-8 w-8 text-white animate-spin" />
                </div>
              )}
              <img 
                src={image.src} 
                alt={image.alt}
                onError={handleImageError}
                onLoad={handleImageLoad}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110",
                  isLoading ? "opacity-0" : "opacity-100",
                  "transition-opacity duration-300"
                )}
              />
            </>
          )}
        </AspectRatio>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
          <p className="font-medium text-lg">{image.alt}</p>
          <span className="inline-block bg-sky-500/80 text-xs text-white px-2 py-0.5 rounded-full mt-2 backdrop-blur-sm">
            #{image.category}
          </span>
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-white/5 mix-blend-overlay"></div>
      </div>
    </div>
  );
};

export default ImageCard;
