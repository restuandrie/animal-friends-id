// src/components/AddToCartButton.tsx
'use client'

import { useCartStore } from "@/store/cartStore";
import { Pet } from "@/lib/interfaces";

interface AddToCartButtonProps {
  pet: Pet;
}

export default function AddToCartButton({ pet }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      _id: pet._id,
      name: pet.name,
      price: pet.price,
      slug: pet.slug.current,
      image: pet.images[0],
      quantity: 1,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-8 w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
    >
      Tambah ke Keranjang
    </button>
  );
}