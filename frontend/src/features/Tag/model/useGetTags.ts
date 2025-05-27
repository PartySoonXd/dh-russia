import { useQuery } from '@tanstack/react-query'
import { getTags } from '../api/getTags'

export const useGetTags = () => {
	return useQuery({
		queryKey: ['tags'],
		queryFn: getTags,
	})
}
