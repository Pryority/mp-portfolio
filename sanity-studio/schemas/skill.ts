import {defineField} from 'sanity'
import {Rule} from 'postcss'

const skill = {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of Tech',
      type: 'string',
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of the skill from 0 to 100%',
      validation: (Rule: {
        required: (arg0: number) => {(): any; new (): any; max: {(arg0: number): any; new (): any}}
      }) => Rule.required(0).max(100),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}

export default skill
