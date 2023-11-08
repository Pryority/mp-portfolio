import {defineField} from 'sanity'

const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      description: 'Project Status',
      type: 'string',
    }),
    defineField({
      name: 'demoImage',
      title: 'Demo Image',
      type: 'image',
      description: 'Visuals of My Projects',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
}

export default project
