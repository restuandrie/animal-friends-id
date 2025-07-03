// src/components/Header.tsx
'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { useEffect, useState } from 'react'

export default function Header() {
  const items = useCartStore((state) => state.items);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const totalItems = isClient ? items.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Animal Friends ID
        </Link>
        <div className="space-x-4 flex items-center">
          <Link href="/katalog" className="text-gray-600 hover:text-gray-800">Katalog</Link>
          <Link href="/keranjang" className="text-gray-600 hover:text-gray-800 relative">
            Keranjang
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
        </div>
      </nav>
    </header>
  );
}