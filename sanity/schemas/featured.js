import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Featured Row Title',
      type: 'string',
      validation: (r)=> r.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Featured Row Short Description',
      type: 'string'
    }),
    defineField({
      name: 'restaurants',
      title: 'Featured_restaurants',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
      validation: (r)=> r.required()
      
    }),
  ],
})
