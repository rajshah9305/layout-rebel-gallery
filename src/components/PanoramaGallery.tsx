
import React, { useRef, useEffect, useState } from 'react';
import { GalleryImage } from '@/data/galleryData';

interface PanoramaGalleryProps {
  images: GalleryImage[];
  title: string;
}

const PanoramaGallery = ({ images, title }: PanoramaGalleryProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }
    
    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);
  
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
    
    // Start the auto scroll only when visible
    if (isVisible) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
    
    // Clean up
    return () => {
      stopAutoScroll();
    };
  }, [isVisible]);
  
  const handleMouseEnter = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  };
  
  const handleMouseLeave = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    
    if (isVisible) {
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
    }
  };

  return (
    <section className="my-12 overflow-hidden">
      <h2 
        className={`text-3xl font-bold mb-6 text-center text-mountain-800 transition-transform duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <span className="bg-gradient-to-r from-sky-600 to-mountain-600 text-transparent bg-clip-text">{title}</span>
        <span className="block h-1 w-24 bg-gradient-to-r from-sky-400 to-mountain-400 mx-auto mt-2 rounded-full"></span>
      </h2>
      
      <div 
        ref={scrollRef} 
        className="image-panorama group relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        {images.map((image) => (
          <div 
            key={image.id} 
            className="image-panorama-item relative overflow-hidden group/item"
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="panorama-img transition-transform duration-700 group-hover/item:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <p className="font-medium text-lg transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-4">
        <div className="h-1.5 w-16 rounded-full bg-sky-200 overflow-hidden">
          <div 
            className="h-full bg-sky-500 rounded-full"
            style={{
              width: scrollRef.current 
                ? `${(scrollRef.current.scrollLeft / (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)) * 100}%` 
                : '0%'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default PanoramaGallery;
