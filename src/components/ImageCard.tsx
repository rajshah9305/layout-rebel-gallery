
import React, { useState } from 'react';
import { GalleryImage } from '@/data/galleryData';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImageCardProps {
  image: GalleryImage;
  onClick?: () => void;
  className?: string;
}

const ImageCard = ({ image, onClick, className }: ImageCardProps) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    console.log(`Failed to load image: ${image.src}`);
    setImageError(true);
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
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-100 to-mountain-100 dark:from-sky-900 dark:to-mountain-900">
              <p className="text-mountain-500 dark:text-mountain-300 text-sm">Image not available</p>
            </div>
          ) : (
            <img 
              src={image.src} 
              alt={image.alt}
              onError={handleImageError}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
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
