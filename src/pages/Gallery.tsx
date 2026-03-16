import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryHeader from '@/widgets/Gallery/GalleryHeader';
import GalleryGrid from '@/widgets/Gallery/GalleryGrid';
import GalleryLightbox from '@/widgets/Gallery/GalleryLightbox';

const Gallery: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAlbumClick = (albumId: number) => {
    setSelectedAlbumId(albumId);
    setIsLightboxOpen(true);
  };

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=2000" },
    { id: 2, src: "https://images.unsplash.com/photo-1598974357801-cbca100e0444?auto=format&fit=crop&q=80&w=2000" },
    { id: 3, src: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&q=80&w=2000" },
    { id: 4, src: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=2000" },
    { id: 5, src: "https://images.unsplash.com/photo-1598974357801-cbca100e0444?auto=format&fit=crop&q=80&w=2000" },
    { id: 6, src: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&q=80&w=2000" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <GalleryHeader />
        <GalleryGrid onAlbumClick={handleAlbumClick} />
      </main>
      <Footer />

      <GalleryLightbox 
        isOpen={isLightboxOpen} 
        onClose={() => setIsLightboxOpen(false)} 
        images={images}
      />
    </div>
  );
};

export default Gallery;
