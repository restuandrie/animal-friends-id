// studio/sanity/schemas/pet.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pet',
  title: 'Pet',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      initialValue: 1,
      validation: (Rule) => Rule.required().integer().min(0),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}], // Ini adalah Rich Text Editor
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'isFeatured',
        title: 'Featured Pet',
        type: 'boolean',
        description: 'Tandai jika ingin ditampilkan di halaman utama.',
        initialValue: false,
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0.asset',
    },
  },
})
