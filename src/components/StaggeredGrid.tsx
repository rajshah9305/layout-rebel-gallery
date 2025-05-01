
import React, { useState, useEffect } from 'react';
import { GalleryImage } from '@/data/galleryData';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface StaggeredGridProps {
  images: GalleryImage[];
  title?: string;
}

const StaggeredGrid = ({ images, title }: StaggeredGridProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [animatedImages, setAnimatedImages] = useState<string[]>([]);
  
  // Staggered animation on mount
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (images.length > 0) {
      const animateImages = async () => {
        for (let i = 0; i < images.length; i++) {
          await new Promise<void>((resolve) => {
            timer = setTimeout(() => {
              setAnimatedImages(prev => [...prev, images[i].id]);
              resolve();
            }, 100);
          });
        }
      };
      
      animateImages();
    }
    
    return () => {
      clearTimeout(timer);
      setAnimatedImages([]);
    };
  }, [images]);
  
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="my-12 px-4">
      {title && (
        <h2 className="text-3xl font-bold mb-6 text-center text-mountain-800 relative overflow-hidden">
          <span className="bg-gradient-to-r from-sky-600 to-mountain-600 text-transparent bg-clip-text">{title}</span>
          <span className="block h-1 w-24 bg-gradient-to-r from-sky-400 to-mountain-400 mx-auto mt-2 rounded-full"></span>
        </h2>
      )}
      
      <div className="staggered-grid">
        {images.map((image) => (
          <div 
            key={image.id} 
            className={cn(
              "staggered-grid-item overflow-hidden rounded-lg relative group",
              animatedImages.includes(image.id) ? "animate-fade-in opacity-100" : "opacity-0"
            )}
            onClick={() => handleImageClick(image)}
            style={{ 
              transitionDelay: `${animatedImages.indexOf(image.id) * 50}ms`,
            }}
          >
            <div className="image-container h-full w-full relative cursor-pointer">
              <AspectRatio ratio={4/3} className="h-full">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 rounded-lg"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-lg font-medium">{image.alt}</p>
                  <span className="inline-block bg-sky-500/80 text-white text-xs px-2 py-1 mt-2 rounded-full backdrop-blur-sm">
                    #{image.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="max-w-5xl w-full max-h-[90vh] relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[85vh] object-contain mx-auto rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-lg">
              <p className="text-2xl font-medium">{selectedImage.alt}</p>
              <p className="text-sm text-sky-300 mt-1">Category: {selectedImage.category}</p>
            </div>
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-white/20 transition-colors rounded-full p-3"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default StaggeredGrid;
