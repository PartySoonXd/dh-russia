import { Organization, OrganizationResponseSchema } from '@entities/Organization'
import { $publicApi } from '@shared/api/api'

export const getOrganizations = async (): Promise<Organization[]> => {
	const res = await $publicApi.get('/api/organizations', {
		params: {
			fields: ['name', 'regDate', 'legalForm'],
		},
	})

	const parsed = OrganizationResponseSchema.parse(res.data)

	return parsed.data
}
