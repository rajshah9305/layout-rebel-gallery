
import React from 'react';
import { GalleryImage } from '@/data/galleryData';
import { cn } from '@/lib/utils';

interface ImageCardProps {
  image: GalleryImage;
  onClick?: () => void;
  className?: string;
}

const ImageCard = ({ image, onClick, className }: ImageCardProps) => {
  return (
    <div 
      className={cn(
        "relative rounded-lg overflow-hidden shadow-md group cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image.src} 
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
        <div className="p-4 text-white w-full">
          <p className="text-sm font-medium">{image.alt}</p>
          <span className="text-xs text-sky-300 mt-1 inline-block">#{image.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
