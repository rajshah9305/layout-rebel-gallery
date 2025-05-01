
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StaggeredGrid from '@/components/StaggeredGrid';
import CategoryFilter from '@/components/CategoryFilter';
import { getImagesByCategory } from '@/data/galleryData';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(category || 'all');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [category]);
  
  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);
  
  const handleCategoryChange = (newCategory: string) => {
    setActiveCategory(newCategory);
    navigate(`/category/${newCategory}`);
  };
  
  const images = getImagesByCategory(activeCategory);
  const categories = ['all', 'mountains', 'sunset', 'night', 'water', 'skies', 'cityscape'];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4">
          <h1 className={`text-3xl md:text-5xl font-bold text-center mt-8 mb-4 transition-all duration-700 ${
            isLoading ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            <span className="bg-gradient-to-r from-sky-600 to-mountain-600 text-transparent bg-clip-text capitalize">
              {activeCategory === 'all' ? 'All Images' : `${activeCategory} Collection`}
            </span>
            <span className="block h-1 w-24 bg-gradient-to-r from-sky-400 to-mountain-400 mx-auto mt-4 rounded-full"></span>
          </h1>
          
          <div className={`transition-all duration-700 delay-100 ${
            isLoading ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-32">
              <div className="animate-pulse flex space-x-4">
                <div className="bg-sky-200 h-24 w-24 rounded-full"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-sky-200 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-sky-200 rounded"></div>
                    <div className="h-4 bg-sky-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={`transition-all duration-700 delay-200 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}>
              <StaggeredGrid images={images} />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
