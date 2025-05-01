
import React, { useState } from 'react';
import { GalleryImage } from '@/data/galleryData';
import { cn } from '@/lib/utils';

interface StaggeredGridProps {
  images: GalleryImage[];
  title?: string;
}

const StaggeredGrid = ({ images, title }: StaggeredGridProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="my-12 px-4">
      {title && <h2 className="text-3xl font-bold mb-6 text-center text-mountain-800">{title}</h2>}
      
      <div className="staggered-grid">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="staggered-grid-item overflow-hidden rounded-lg relative group"
            onClick={() => handleImageClick(image)}
          >
            <div className="image-container h-full w-full relative cursor-pointer">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="image-caption">
                <p className="text-sm">{image.alt}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <p className="text-lg font-medium">{selectedImage.alt}</p>
              <p className="text-sm text-gray-300">Category: {selectedImage.category}</p>
            </div>
            <button 
              className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
