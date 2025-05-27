import { classNames } from '@shared/lib/classNames/classNames'
import cls from './tag-item.module.scss'

interface TagItemProps {
	className?: string
	text: string
	slug: string
}

export const TagItem = (props: TagItemProps) => {
	const {
		className,
		text,
		slug,
	} = props

	return (
		<div className={classNames(cls['tag-item'], {}, [className])}>
			<input type="checkbox" value={slug} name={slug} id={slug} />
			<label htmlFor={slug}>{text}</label>
		</div>
	)
}
