import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '6e5a0whr',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
