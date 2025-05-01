
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StaggeredGrid from '@/components/StaggeredGrid';
import CategoryFilter from '@/components/CategoryFilter';
import { getImagesByCategory } from '@/data/galleryData';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [activeCategory, setActiveCategory] = useState(category || 'all');
  
  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);
  
  const handleCategoryChange = (newCategory: string) => {
    setActiveCategory(newCategory);
  };
  
  const images = getImagesByCategory(activeCategory);
  const categories = ['all', 'mountains', 'sunset', 'night', 'water', 'skies', 'cityscape'];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-8 capitalize">
            {activeCategory === 'all' ? 'All Images' : `${activeCategory} Collection`}
          </h1>
          
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
          
          <StaggeredGrid images={images} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
