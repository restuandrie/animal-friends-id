// src/app/katalog/page.tsx
import { client } from "@/lib/sanity";
import { Pet } from "@/lib/interfaces";
import PetCard from "@/components/PetCard";

async function getAllPets() {
  const query = `*[_type == "pet"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    price,
    images
  }`;
  const data = await client.fetch(query);
  return data;
}

export const metadata = {
    title: "Katalog - Animal Friends ID",
    description: "Lihat semua koleksi hewan peliharaan kami.",
};

export default async function KatalogPage() {
  const pets: Pet[] = await getAllPets();

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Katalog Kami</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
}
