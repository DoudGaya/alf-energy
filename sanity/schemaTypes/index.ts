import { type SchemaTypeDefinition } from 'sanity'
// import { news } from '../schemas/news'
import news from '../schemas/news'
import  gallery  from '../schemas/gallery'
import  category  from '../schemas/category'
import  blockContent  from '../schemas/blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, gallery, category, blockContent],
}
