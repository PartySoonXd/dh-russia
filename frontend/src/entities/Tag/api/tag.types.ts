import { z } from 'zod'
import { TagSchema } from '../model/tag.schemas'

export type Tag = z.infer<typeof TagSchema>
