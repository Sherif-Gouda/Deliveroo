import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (r)=>r.required()
    }),
    defineField({
      name: 'image',
      title: 'Dish image',
      type: 'image',
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description of the Dish',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price of the Dish',
      type: 'number',
      validation: r=>r.required()
    }),
  ],
})
