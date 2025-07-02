// src/components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Animal Friends ID
        </Link>
        <div className="space-x-4">
          <Link href="/katalog" className="text-gray-600 hover:text-gray-800">Katalog</Link>
          <Link href="/keranjang" className="text-gray-600 hover:text-gray-800">Keranjang</Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
        </div>
      </nav>
    </header>
  )
}