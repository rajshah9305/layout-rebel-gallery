
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { galleryImages } from '@/data/galleryData';
import ImageCard from '@/components/ImageCard';

const AllPhotos = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [layout, setLayout] = useState<'grid' | 'mosaic' | 'columns'>('mosaic');
  
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
            <h1 className="text-3xl md:text-4xl font-bold">All Photos</h1>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => setLayout('grid')}
                className={`p-2 rounded-md ${layout === 'grid' ? 'bg-sky-100 text-sky-600' : 'bg-gray-100'}`}
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
                className={`p-2 rounded-md ${layout === 'mosaic' ? 'bg-sky-100 text-sky-600' : 'bg-gray-100'}`}
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
                className={`p-2 rounded-md ${layout === 'columns' ? 'bg-sky-100 text-sky-600' : 'bg-gray-100'}`}
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
            ${layout === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' : ''}
            ${layout === 'mosaic' ? 'staggered-grid' : ''}
            ${layout === 'columns' ? 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4' : ''}
          `}>
            {galleryImages.map((image) => (
              layout === 'columns' ? (
                <div key={image.id} className="mb-4 break-inside-avoid">
                  <ImageCard 
                    image={image} 
                    onClick={() => handleImageClick(image.id)}
                  />
                </div>
              ) : (
                <div 
                  key={image.id} 
                  className={layout === 'mosaic' ? 'staggered-grid-item' : ''}
                >
                  <ImageCard 
                    image={image} 
                    onClick={() => handleImageClick(image.id)}
                  />
                </div>
              )
            ))}
          </div>
        </div>
        
        {/* Image Modal */}
        {selectedImage && selectedImageData && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="max-w-4xl max-h-[90vh] relative animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImageData.src} 
                alt={selectedImageData.alt}
                className="max-w-full max-h-[85vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h3 className="font-medium">{selectedImageData.alt}</h3>
                <p className="text-sm text-gray-300">Category: {selectedImageData.category}</p>
              </div>
              <button 
                onClick={closeModal}
                className="absolute top-3 right-3 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
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
