import { TagItem } from '@entities/Tag'
import { useGetTags } from '@features/Tag'
import { classNames } from '@shared/lib/classNames/classNames'
import { Dispatch, SetStateAction } from 'react'

interface TagFiltersProps {
	className?: string
	setQuery: Dispatch<SetStateAction<string[]>>
}

export const TagFilters = (props: TagFiltersProps) => {
	const {
		className,
		setQuery,
	} = props
	const { data } = useGetTags()

	const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
		const formData = new FormData(e.currentTarget)
		const data = Object.fromEntries(formData)

		setQuery(Object.values(data) as string[])
	}

	return (
		<form className={classNames('', {}, [className])} onChange={e => formHandler(e)}>
			{data && data.map((tag) => {
				return <TagItem text={tag.text} slug={tag.slug} key={tag.id} />
			})}
		</form>
	)
}
