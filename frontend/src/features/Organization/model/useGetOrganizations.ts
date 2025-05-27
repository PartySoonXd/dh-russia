import { useQuery } from '@tanstack/react-query'
import { getOrganizations } from '../api/getOrganizations'

export const useGetOrganizations = () => {
	return useQuery({
		queryKey: ['organizations'],
		queryFn: getOrganizations,
	})
}
