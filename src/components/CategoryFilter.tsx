
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-8">
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden",
            "transform hover:-translate-y-1",
            activeCategory === category 
              ? "bg-sky-600 text-white shadow-lg shadow-sky-500/20" 
              : "bg-mountain-100 text-mountain-700 hover:bg-mountain-200"
          )}
          style={{ transitionDelay: `${index * 30}ms` }}
        >
          <span className="relative z-10">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          
          {activeCategory === category && (
            <>
              <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-700 opacity-100"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-sky-600/20 blur-lg opacity-75"></span>
            </>
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
