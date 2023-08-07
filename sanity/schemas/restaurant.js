import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (r)=> r.required()
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description of the Restaurant',
      validation: (r)=> r.max(200)
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Restaurant Image',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (r)=> r.required()
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating Between 1 and 5',
      validation: (r)=> r.required()
              .min(1)
              .max(5)
              .error('Value must be between 1 and 5')
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (r)=> r.required(),
      type: 'reference',
      to: [{type: 'category'}]
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      validation: (r)=> r.required(),
      of: [{type: 'reference', to: [{type: 'dish'}]}]
    }),
  ],

})
