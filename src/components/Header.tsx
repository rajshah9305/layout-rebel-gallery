
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'All Photos', path: '/all' },
  { name: 'Mountains', path: '/category/mountains' },
  { name: 'Sunsets', path: '/category/sunset' },
  { name: 'Night', path: '/category/night' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-header border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-sky-400 text-transparent bg-clip-text">
          ViewScape
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className="text-mountain-700 hover:text-sky-600 transition-colors py-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-mountain-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-background/95 z-40 transform transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-end">
            <button 
              className="text-mountain-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <ul className="flex flex-col items-center mt-10 space-y-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className="text-xl font-medium text-mountain-700 hover:text-sky-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
