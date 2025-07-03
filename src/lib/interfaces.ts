// src/lib/interfaces.ts
import type { TypedObject } from '@portabletext/types'

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
  images: SanityImage[];
  isFeatured: boolean;
  description: TypedObject[]; // Menggunakan tipe langsung dari library
}
