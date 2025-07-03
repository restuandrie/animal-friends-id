// src/app/pet/[slug]/page.tsx
import { client } from "@/lib/sanity";
import { Pet } from "@/lib/interfaces";
import ImageGallery from "@/components/ImageGallery";
import { PortableText } from '@portabletext/react'
import AddToCartButton from "@/components/AddToCartButton"; // Impor komponen baru

async function getPetData(slug: string): Promise<Pet> { // Menambahkan tipe return yang eksplisit
  const query = `*[_type == "pet" && slug.current == "${slug}"][0] {
    _id,
    name,
    price,
    description,
    images,
    "slug": slug.current
  }`;
  const data = await client.fetch(query);
  return data;
}

// Untuk SEO dinamis
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const pet = await getPetData(params.slug);
    return {
        title: `${pet.name} - Animal Friends ID`,
        description: `Detail dan informasi tentang ${pet.name}`,
    }
}

export default async function PetDetailsPage({ params }: { params: { slug: string } }) {
  const pet = await getPetData(params.slug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* ... (Kolom Kiri: Galeri Gambar) ... */}
      <ImageGallery images={pet.images} />

      {/* Kolom Kanan: Info Produk */}
      <div className="flex flex-col">
        {/* ... (info nama dan harga) ... */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{pet.name}</h1>
        <p className="text-2xl text-gray-700 mt-2">
          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(pet.price)}
        </p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Deskripsi</h2>
          <div className="prose prose-lg mt-2 text-gray-600">
            <PortableText value={pet.description} />
          </div>
        </div>

        <AddToCartButton pet={pet} /> {/* Ganti tombol lama dengan ini */}
      </div>
    </div>
  );
}