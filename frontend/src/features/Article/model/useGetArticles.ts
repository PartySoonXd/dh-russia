import { useQuery } from '@tanstack/react-query'
import { getArticles } from '../api/getArticles'
import { articleMapper } from '@entities/Article'

export const useGetArticles = (query: string[] = []) => {
	return useQuery({
		queryKey: ['articles', query],
		queryFn: async () => {
			const data = await getArticles(query)

			return data.map(articleMapper)
		},
	})
}
