
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { galleryImages } from '@/data/galleryData';
import ImageCard from '@/components/ImageCard';

const AllPhotos = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [layout, setLayout] = useState<'grid' | 'mosaic' | 'columns'>('mosaic');
  const [animatedImages, setAnimatedImages] = useState<boolean[]>(Array(galleryImages.length).fill(false));
  
  // Animate images on page load
  useEffect(() => {
    const animateWithDelay = async () => {
      const newAnimatedState = [...animatedImages];
      
      for (let i = 0; i < galleryImages.length; i++) {
        await new Promise<void>(resolve => {
          setTimeout(() => {
            newAnimatedState[i] = true;
            setAnimatedImages([...newAnimatedState]);
            resolve();
          }, 50 * i);
        });
      }
    };
    
    animateWithDelay();
  }, [layout]); // Rerun animation when layout changes
  
  const handleImageClick = (imageId: string) => {
    setSelectedImage(imageId);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  const selectedImageData = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold relative">
              <span className="bg-gradient-to-r from-sky-600 to-mountain-600 text-transparent bg-clip-text">All Photos</span>
              <span className="block h-1 w-16 bg-gradient-to-r from-sky-400 to-mountain-400 mt-2 rounded-full"></span>
            </h1>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setLayout('grid')}
                className={`p-2 rounded-md transition-all duration-300 ${layout === 'grid' ? 'bg-sky-100 text-sky-600 shadow-md' : 'bg-gray-100 hover:bg-gray-200'}`}
                title="Grid Layout"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button 
                onClick={() => setLayout('mosaic')}
                className={`p-2 rounded-md transition-all duration-300 ${layout === 'mosaic' ? 'bg-sky-100 text-sky-600 shadow-md' : 'bg-gray-100 hover:bg-gray-200'}`}
                title="Mosaic Layout"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button 
                onClick={() => setLayout('columns')}
                className={`p-2 rounded-md transition-all duration-300 ${layout === 'columns' ? 'bg-sky-100 text-sky-600 shadow-md' : 'bg-gray-100 hover:bg-gray-200'}`}
                title="Columns Layout"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="5" height="18"></rect>
                  <rect x="10" y="3" width="5" height="18"></rect>
                  <rect x="17" y="3" width="5" height="18"></rect>
                </svg>
              </button>
            </div>
          </div>
          
          <div className={`
            ${layout === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' : ''}
            ${layout === 'mosaic' ? 'staggered-grid' : ''}
            ${layout === 'columns' ? 'columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6' : ''}
          `}>
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`
                  ${layout === 'mosaic' ? 'staggered-grid-item' : ''} 
                  ${layout === 'columns' ? 'mb-6 break-inside-avoid' : ''}
                  transition-all duration-700 transform
                  ${animatedImages[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <ImageCard 
                  image={image} 
                  onClick={() => handleImageClick(image.id)}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Image Modal with enhanced animations */}
        {selectedImage && selectedImageData && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="max-w-5xl w-full max-h-[90vh] relative animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImageData.src} 
                alt={selectedImageData.alt}
                className="max-w-full max-h-[85vh] object-contain mx-auto rounded-lg shadow-2xl animate-fade-in"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 animate-slide-up">
                <h3 className="font-bold text-2xl">{selectedImageData.alt}</h3>
                <p className="text-sky-300">Category: {selectedImageData.category}</p>
              </div>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 hover:bg-white/20 transition-colors p-3 rounded-full text-white transform hover:rotate-90 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default AllPhotos;
