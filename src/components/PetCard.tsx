// src/components/PetCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { Pet } from '@/lib/interfaces'

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  return (
    <Link href={`/pet/${pet.slug.current}`} className="group">
      <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="relative w-full h-64 bg-gray-200">
          <Image
            src={urlFor(pet.images[0]).url()}
            alt={pet.name}
            fill // Menggunakan prop 'fill' yang modern
            className="object-cover group-hover:scale-105 transition-transform duration-300" // Menggunakan 'object-cover' dari Tailwind
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold text-gray-800">{pet.name}</h3>
          <p className="text-gray-600 mt-1">
            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(pet.price)}
          </p>
        </div>
      </div>
    </Link>
  )
}