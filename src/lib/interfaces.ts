// src/lib/interfaces.ts
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Pet {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  images: SanityImage[]; // Menggunakan tipe yang lebih spesifik
  isFeatured: boolean;
}