
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
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 rounded-full font-medium transition-colors",
            activeCategory === category 
              ? "bg-sky-600 text-white" 
              : "bg-mountain-100 text-mountain-700 hover:bg-mountain-200"
          )}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
