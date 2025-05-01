
import React, { useState, useEffect } from 'react';
import { GalleryImage } from '@/data/galleryData';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import ImageCard from './ImageCard';
import { X } from 'lucide-react';

interface StaggeredGridProps {
  images: GalleryImage[];
  title?: string;
}

const StaggeredGrid = ({ images, title }: StaggeredGridProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [animatedImages, setAnimatedImages] = useState<string[]>([]);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
  
  // Handle keyboard events for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        closeModal();
      }
      
      if (e.key === 'ArrowRight' && selectedImage) {
        navigateImage(1);
      }
      
      if (e.key === 'ArrowLeft' && selectedImage) {
        navigateImage(-1);
      }
    };
    
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);
  
  const navigateImage = (direction: number) => {
    if (!selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    if (currentIndex === -1) return;
    
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    
    setSelectedImage(images[newIndex]);
  };
  
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    
    // Add body class to prevent scrolling when modal is open
    document.body.classList.add('overflow-hidden');
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    
    // Use a timeout to match the animation duration
    setTimeout(() => {
      setSelectedImage(null);
      
      // Remove body class to allow scrolling again
      document.body.classList.remove('overflow-hidden');
    }, 300);
  };
  
  const handleImageError = (imageId: string) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
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
            style={{ 
              transitionDelay: `${animatedImages.indexOf(image.id) * 50}ms`,
            }}
          >
            <ImageCard
              image={image}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
      
      {/* Enhanced modal with animations */}
      {selectedImage && (
        <div 
          className={cn(
            "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm",
            isModalOpen ? "animate-fade-in opacity-100" : "animate-fade-out opacity-0"
          )}
          onClick={closeModal}
        >
          <div 
            className={cn(
              "max-w-5xl w-full max-h-[90vh] relative",
              isModalOpen ? "animate-scale-in" : "animate-scale-out"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              onError={() => handleImageError(selectedImage.id)}
              className={cn(
                "max-w-full max-h-[85vh] object-contain mx-auto rounded-lg shadow-2xl",
                imageErrors[selectedImage.id] ? "hidden" : "block"
              )}
            />
            {imageErrors[selectedImage.id] && (
              <div className="max-w-full max-h-[85vh] bg-gradient-to-br from-sky-800 to-mountain-700 rounded-lg shadow-2xl flex flex-col items-center justify-center p-12">
                <p className="text-white text-xl font-medium mb-2">{selectedImage.alt}</p>
                <p className="text-white/70 mb-4">Image could not be loaded</p>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-lg">
              <p className="text-2xl font-medium">{selectedImage.alt}</p>
              <p className="text-sm text-sky-300 mt-1">Category: {selectedImage.category}</p>
            </div>
            
            {/* Navigation buttons */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-white/20 transition-colors rounded-full p-4 text-white opacity-70 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(-1);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-white/20 transition-colors rounded-full p-4 text-white opacity-70 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(1);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-white/20 transition-colors rounded-full p-3"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default StaggeredGrid;
