// src/app/keranjang/page.tsx
'use client'

import { useCartStore } from "@/store/cartStore"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/lib/sanity"

export default function CartPage() {
  const { items, removeItem, increaseQuantity, decreaseQuantity } = useCartStore();
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Keranjang Anda Kosong</h1>
        <p className="text-gray-600 mb-8">Sepertinya Anda belum menambahkan hewan peliharaan.</p>
        <Link href="/katalog" className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700">
          Jelajahi Katalog
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Keranjang Belanja Anda</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Daftar Item */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item._id} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <Image src={urlFor(item.image).url()} alt={item.name} width={100} height={100} className="rounded-md object-cover" />
              <div className="ml-4 flex-grow">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => decreaseQuantity(item._id)} className="px-3 py-1 border rounded-l-md">-</button>
                <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item._id)} className="px-3 py-1 border rounded-r-md">+</button>
              </div>
              <button onClick={() => removeItem(item._id)} className="ml-6 text-red-500 hover:text-red-700">Hapus</button>
            </div>
          ))}
        </div>

        {/* Ringkasan Pesanan */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Ringkasan Pesanan</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalPrice)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Pengiriman</span>
              <span>Akan dihitung</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalPrice)}</span>
            </div>
            <button className="mt-6 w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700">
              Lanjut ke Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}