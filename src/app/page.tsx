// src/app/page.tsx
import { client } from "@/lib/sanity";
import { Pet } from "@/lib/interfaces";
import PetCard from "@/components/PetCard";

async function getFeaturedPets() {
  const query = `*[_type == "pet" && isFeatured == true] {
    _id,
    name,
    slug,
    price,
    images,
    isFeatured
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function HomePage() {
  const featuredPets: Pet[] = await getFeaturedPets();

  return (
    <div>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Temukan Sahabat Barumu</h1>
        <p className="text-lg text-gray-600 mt-4">Hewan peliharaan sehat dan terawat yang siap menjadi bagian dari keluargamu.</p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Pilihan Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredPets.map((pet) => (
            <PetCard key={pet._id} pet={pet} />
          ))}
        </div>
      </section>
    </div>
  )
}