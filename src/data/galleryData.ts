
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'mountains' | 'skies' | 'sunset' | 'cityscape' | 'water' | 'night';
  featured?: boolean;
  width?: number;
  height?: number;
}

// Use placeholder images since uploaded images are failing to load
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Mountains with lake reflection',
    category: 'mountains',
    featured: true,
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    alt: 'Night sky with moon reflecting in water',
    category: 'night',
    featured: true,
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1524&q=80',
    alt: 'City skyline at sunset',
    category: 'cityscape',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    alt: 'Mountain landscape with snow',
    category: 'mountains',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'City with fog layer',
    category: 'cityscape',
    featured: true,
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Airplane in pink sunset clouds',
    category: 'sunset',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    alt: 'Pink clouds with purple sky',
    category: 'skies',
    featured: true,
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Mountain landscape with fog',
    category: 'mountains',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Lone figure in misty field',
    category: 'night',
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1505533542167-8c89838bb19e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1439&q=80',
    alt: 'Pink and blue sunset with tree silhouettes',
    category: 'sunset',
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1501908734255-16579c18c25f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    alt: 'Mountain landscape with forest',
    category: 'mountains',
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
    alt: 'Mountain vista at sunset',
    category: 'mountains',
  },
  {
    id: '13',
    src: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Night sky with stars over mountain',
    category: 'night',
  },
  {
    id: '14',
    src: 'https://images.unsplash.com/photo-1462400362591-9ca55235346a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    alt: 'Blue valley with mountains',
    category: 'mountains',
  },
  {
    id: '15',
    src: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1444&q=80',
    alt: 'City lights reflecting on water at night',
    category: 'water',
  },
  {
    id: '16',
    src: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    alt: 'Sunset over mountains',
    category: 'sunset',
  },
  {
    id: '17',
    src: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    alt: 'Vibrant sunset over ocean',
    category: 'sunset',
    featured: true,
  },
  {
    id: '18',
    src: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Sunrise over ocean horizon',
    category: 'water',
  },
  {
    id: '19',
    src: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    alt: 'Golden light over valley',
    category: 'mountains',
  },
  {
    id: '20',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    alt: 'Landscape with waterfalls',
    category: 'water',
    featured: true,
  },
  {
    id: '21',
    src: '/lovable-uploads/75c6ce68-4e1e-4583-b457-cd19b2a38f27.png',
    alt: 'New landscape 1',
    category: 'mountains',
    featured: true,
  },
  {
    id: '22',
    src: '/lovable-uploads/13fb1f58-2e07-4a80-935f-fce086823f69.png',
    alt: 'New landscape 2',
    category: 'sunset',
    featured: true,
  },
  {
    id: '23',
    src: '/lovable-uploads/6bed38c5-7202-4160-9989-4c8658de93f0.png',
    alt: 'New landscape 3',
    category: 'mountains',
    featured: true,
  },
];

export const getImagesByCategory = (category: string) => {
  if (category === 'all') {
    return galleryImages;
  }
  return galleryImages.filter(img => img.category === category);
};

export const getFeaturedImages = () => {
  return galleryImages.filter(img => img.featured);
};
