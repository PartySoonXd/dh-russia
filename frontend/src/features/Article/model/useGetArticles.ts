import { useQuery } from '@tanstack/react-query'
import { getArticles } from '../api/getArticles'
import { articleMapper } from '@entities/Article/api/article.mappers'

export const useGetArticles = () => {
	return useQuery({
		queryKey: ['articles'],
		queryFn: async () => {
			const data = await getArticles()

			return data.map(articleMapper)
		},
		staleTime: 1000 * 60 * 5,
	})
}
