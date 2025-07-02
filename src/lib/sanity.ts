// src/lib/sanity.ts
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImage } from '@/lib/interfaces' // Impor tipe data

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `false` jika Anda ingin data yang benar-benar real-time
})

// Helper untuk mendapatkan URL gambar dari Sanity
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImage) { // Gunakan tipe yang spesifik
  return builder.image(source)
}