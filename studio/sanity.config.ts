// studio/sanity.config.ts

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import category from './schemas/category'
import pet from './schemas/pet'

// Ambil variables dari import.meta.env (cara Vite/Sanity v3)
const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID!
const dataset = import.meta.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'animal_friends_studio',
  title: 'Animal Friends Studio',
  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [category, pet],
  },
})
