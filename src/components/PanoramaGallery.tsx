
import React, { useRef, useEffect } from 'react';
import { GalleryImage } from '@/data/galleryData';

interface PanoramaGalleryProps {
  images: GalleryImage[];
  title: string;
}

const PanoramaGallery = ({ images, title }: PanoramaGalleryProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Auto scroll effect
    const startAutoScroll = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 1;
          
          // Reset to beginning once we reach the end
          if (
            scrollRef.current.scrollLeft >=
            scrollRef.current.scrollWidth - scrollRef.current.clientWidth
          ) {
            scrollRef.current.scrollLeft = 0;
          }
        }
      }, 30);
    };
    
    const stopAutoScroll = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
    
    // Start the auto scroll
    startAutoScroll();
    
    // Clean up
    return () => {
      stopAutoScroll();
    };
  }, []);
  
  const handleMouseEnter = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  };
  
  const handleMouseLeave = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    
    scrollIntervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        
        // Reset to beginning once we reach the end
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 30);
  };

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-mountain-800">{title}</h2>
      
      <div 
        ref={scrollRef} 
        className="image-panorama"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image) => (
          <div key={image.id} className="image-panorama-item">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="panorama-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PanoramaGallery;
