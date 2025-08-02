import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Solar Projects', value: 'solar' },
          { title: 'Wind Energy', value: 'wind' },
          { title: 'Oil & Gas', value: 'oil-gas' },
          { title: 'Training', value: 'training' },
          { title: 'Consulting', value: 'consulting' },
          { title: 'Events', value: 'events' },
        ],
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category',
    },
    prepare(selection) {
      const { title, category } = selection
      return { 
        ...selection, 
        subtitle: category ? `Category: ${category}` : 'No category'
      }
    },
  },
})
