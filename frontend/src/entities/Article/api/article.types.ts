import { z } from 'zod'
import { ArticleDtoSchema, ArticleResponseSchema, ArticleSchema } from '../model/article.schemas'

export type Article = z.infer<typeof ArticleSchema>
export type ArticleDto = z.infer<typeof ArticleDtoSchema>
export type ArticleResponse = z.infer<typeof ArticleResponseSchema>
