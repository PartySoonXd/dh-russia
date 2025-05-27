import { z } from 'zod'

import { OrganizationResponseSchema, OrganizationSchema } from '../model/organization.schemas'

export type Organization = z.infer<typeof OrganizationSchema>
export type OrganizationResponse = z.infer<typeof OrganizationResponseSchema>
