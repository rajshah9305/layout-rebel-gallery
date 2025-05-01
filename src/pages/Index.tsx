
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSplit from '@/components/HeroSplit';
import PanoramaGallery from '@/components/PanoramaGallery';
import StaggeredGrid from '@/components/StaggeredGrid';
import { galleryImages, getFeaturedImages, getImagesByCategory } from '@/data/galleryData';

const Index = () => {
  const mountainImages = getImagesByCategory('mountains').slice(0, 5);
  const skyImages = [...getImagesByCategory('skies'), ...getImagesByCategory('sunset')].slice(0, 4);
  const featuredImages = getFeaturedImages();
  
  // Use more reliable images for hero section
  const nightImage = galleryImages.find(img => img.category === 'night' && img.id === '2')?.src || 
    'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80';
  
  const sunsetImage = galleryImages.find(img => img.category === 'sunset' && img.id === '17')?.src || 
    'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80';
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <HeroSplit 
          leftImage={nightImage}
          rightImage={sunsetImage}
          leftTitle="Night Skies"
          rightTitle="Vibrant Sunsets"
          leftPath="/category/night"
          rightPath="/category/sunset"
        />
        
        {/* Featured Images */}
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-sky-700 to-sky-500 text-transparent bg-clip-text">
              ViewScape
            </span>
          </h1>
          <p className="text-xl text-center text-mountain-600 mb-12 max-w-2xl mx-auto">
            A collection of breathtaking landscapes and skies from around the world,
            showcasing the beauty of nature in all its glory.
          </p>
        </div>
        
        {/* Panorama Gallery */}
        <div className="container mx-auto">
          <PanoramaGallery 
            images={mountainImages} 
            title="Mountain Panoramas" 
          />
        </div>
        
        {/* Featured Images Grid */}
        <div className="bg-gradient-to-b from-sky-50 to-mountain-50 py-12">
          <div className="container mx-auto">
            <StaggeredGrid 
              images={featuredImages}
              title="Featured Images" 
            />
          </div>
        </div>
        
        {/* Sky Collection */}
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-mountain-800">Sky Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {skyImages.map(image => (
              <div key={image.id} className="relative rounded-lg overflow-hidden shadow-lg group h-64">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    console.log(`Failed to load sky collection image: ${image.src}`);
                    target.parentElement?.classList.add('bg-gradient-to-br', 'from-sky-300', 'to-purple-200');
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-mountain-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Explore More Categories</h2>
            <p className="text-lg text-mountain-300 mb-8">Discover our complete collection of stunning landscapes.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/category/mountains" className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                Mountains
              </a>
              <a href="/category/sunset" className="bg-sunset-600 hover:bg-sunset-700 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                Sunsets
              </a>
              <a href="/category/night" className="bg-mountain-700 hover:bg-mountain-800 text-white px-6 py-3 rounded-lg transition-colors font-medium">
                Night Skies
              </a>
              <a href="/all" className="bg-white hover:bg-mountain-100 text-mountain-900 px-6 py-3 rounded-lg transition-colors font-medium">
                View All
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
