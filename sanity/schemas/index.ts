import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import category from './category'
import news from './news'
import gallery from './gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, gallery, category, blockContent],
}
