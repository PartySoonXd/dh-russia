import { classNames } from '@shared/lib/classNames/classNames'
import { Loader } from '@shared/ui/Loader/ui/Loader'
import cls from './page-loader.module.scss'

interface PageLoaderProps {
	className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<div className={classNames(cls['page-loader'], {}, [className])}>
			<Loader />
		</div>
	)
}
