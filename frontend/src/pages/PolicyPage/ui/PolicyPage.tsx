import { $publicApi } from '@shared/api/api'
import { classNames } from '@shared/lib/classNames/classNames'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import cls from './policy-page.module.scss'

interface PolicyPageProps {
	className?: string
}

const PolicyPage = ({ className }: PolicyPageProps) => {
	const { t } = useTranslation()
	const [pageData, setPageData] = useState<string>()

	useEffect(() => {
		const getPageData = async (): Promise<void> => {
			await $publicApi.get('/api/privacy-policy').then(({ data }) => {
				setPageData(data.data.text as string)
			}).catch((error) => {
				console.log(error)
			})
		}

		getPageData()
	}, [])

	if (pageData) {
		return (
			<div className={classNames('', {}, [className])}>
				<div className={cls.md}>
					<ReactMarkdown children={pageData} />
				</div>
			</div>
		)
	}
}

export default PolicyPage
