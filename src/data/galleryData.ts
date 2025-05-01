
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'mountains' | 'skies' | 'sunset' | 'cityscape' | 'water' | 'night';
  featured?: boolean;
  width?: number;
  height?: number;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/lovable-uploads/9c2057bb-fb47-4de0-b785-971190d04835.png',
    alt: 'Mountains with lake reflection',
    category: 'mountains',
    featured: true,
  },
  {
    id: '2',
    src: '/lovable-uploads/3d3b9c5d-551d-4ebe-b300-948ecd2a1710.png',
    alt: 'Night sky with moon reflecting in water',
    category: 'night',
    featured: true,
  },
  {
    id: '3',
    src: '/lovable-uploads/3ad37e69-09c2-40d0-9d43-69173aa1381f.png',
    alt: 'City skyline at sunset',
    category: 'cityscape',
  },
  {
    id: '4',
    src: '/lovable-uploads/f76a0fbb-0217-4ef9-8d4c-340259fe8161.png',
    alt: 'Mountain landscape with snow',
    category: 'mountains',
  },
  {
    id: '5',
    src: '/lovable-uploads/869f6bd6-d131-48e7-982f-473c57564646.png',
    alt: 'City with fog layer',
    category: 'cityscape',
    featured: true,
  },
  {
    id: '6',
    src: '/lovable-uploads/7253a1c2-e67b-4483-bc48-1e0ad76e0741.png',
    alt: 'Airplane in pink sunset clouds',
    category: 'sunset',
  },
  {
    id: '7',
    src: '/lovable-uploads/df1c0fe2-d28c-43c8-a0c8-077ee9b2a8d8.png',
    alt: 'Pink clouds with purple sky',
    category: 'skies',
    featured: true,
  },
  {
    id: '8',
    src: '/lovable-uploads/96383c6e-8615-4e40-b301-48690f4b7372.png',
    alt: 'Mountain landscape with fog',
    category: 'mountains',
  },
  {
    id: '9',
    src: '/lovable-uploads/576d2d8d-8fec-4b60-bdba-fdce7006006a.png',
    alt: 'Lone figure in misty field',
    category: 'night',
  },
  {
    id: '10',
    src: '/lovable-uploads/5fbc4312-1926-464f-bb5d-4f800c1c0487.png',
    alt: 'Pink and blue sunset with tree silhouettes',
    category: 'sunset',
  },
  {
    id: '11',
    src: '/lovable-uploads/4caedc5c-8a7e-41a9-b62e-9d112b6a7690.png',
    alt: 'Mountain landscape with forest',
    category: 'mountains',
  },
  {
    id: '12',
    src: '/lovable-uploads/68ace758-06ad-4136-96f4-02bf0df23563.png',
    alt: 'Mountain vista at sunset',
    category: 'mountains',
  },
  {
    id: '13',
    src: '/lovable-uploads/5c7ed96d-aadb-458c-8d18-0d41932f31e9.png',
    alt: 'Night sky with stars over mountain',
    category: 'night',
  },
  {
    id: '14',
    src: '/lovable-uploads/7141062c-6d7a-4671-89ce-902bb577f15e.png',
    alt: 'Blue valley with mountains',
    category: 'mountains',
  },
  {
    id: '15',
    src: '/lovable-uploads/09063790-2c46-456f-9e89-28b3e8a41eab.png',
    alt: 'City lights reflecting on water at night',
    category: 'water',
  },
  {
    id: '16',
    src: '/lovable-uploads/fbebce6a-c85f-44d0-88af-385b285ccff4.png',
    alt: 'Sunset over mountains',
    category: 'sunset',
  },
  {
    id: '17',
    src: '/lovable-uploads/fdfbef51-6f36-492a-80d0-986347bfa834.png',
    alt: 'Vibrant sunset over ocean',
    category: 'sunset',
    featured: true,
  },
  {
    id: '18',
    src: '/lovable-uploads/943b386e-d2c4-458f-8df2-1bce9b4dd403.png',
    alt: 'Sunrise over ocean horizon',
    category: 'water',
  },
  {
    id: '19',
    src: '/lovable-uploads/a3010f82-252d-40c3-8038-beef5c1da21f.png',
    alt: 'Golden light over valley',
    category: 'mountains',
  },
  {
    id: '20',
    src: '/lovable-uploads/d614f96f-24d8-465c-85db-01f37cb7c0c8.png',
    alt: 'Animated landscape with waterfalls',
    category: 'water',
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
