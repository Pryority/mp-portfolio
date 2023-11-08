import {defineField} from 'sanity'

const social = {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'An app that I use',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
  ],
}

export default social
