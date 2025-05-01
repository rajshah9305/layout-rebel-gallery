
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mountain-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-sky-200 text-transparent bg-clip-text">ViewScape</h3>
            <p className="text-mountain-400">
              Capturing the beauty of landscapes and skies around the world.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/category/mountains" className="text-mountain-400 hover:text-sky-400">Mountains</Link></li>
              <li><Link to="/category/sunset" className="text-mountain-400 hover:text-sky-400">Sunsets</Link></li>
              <li><Link to="/category/night" className="text-mountain-400 hover:text-sky-400">Night</Link></li>
              <li><Link to="/category/water" className="text-mountain-400 hover:text-sky-400">Water</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">About</h4>
            <p className="text-mountain-400">
              This gallery showcases breathtaking landscape photography from around the world.
              From majestic mountains to vibrant sunsets and serene night skies.
            </p>
          </div>
        </div>
        
        <div className="border-t border-mountain-700 mt-8 pt-6 text-center text-mountain-500">
          <p>&copy; {new Date().getFullYear()} ViewScape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
