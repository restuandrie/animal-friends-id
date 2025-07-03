// src/components/ImageGallery.tsx
'use client' // Komponen ini interaktif, jadi kita tandai sebagai Client Component

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { SanityImage } from '@/lib/interfaces'

interface ImageGalleryProps {
  images: SanityImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image: SanityImage) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-96 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={urlFor(selectedImage).url()}
          alt="Foto produk"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative h-20 w-full cursor-pointer overflow-hidden rounded-lg bg-gray-200 ${selectedImage === image ? 'ring-2 ring-indigo-500' : ''}`}
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={urlFor(image).url()}
              alt={`Thumbnail produk ${index + 1}`}
              fill
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}