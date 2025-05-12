import { $publicApi } from '@shared/api/api'
import { classNames } from '@shared/lib/classNames/classNames'
import { Button } from '@shared/ui/Button/ui/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface HomePageProps {
	className?: string
}

const HomePage = ({ className }: HomePageProps) => {
	const { t } = useTranslation('home')

	const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const data = Object.fromEntries(formData)
		console.log(data)
	}

	const getData = async () => {
		const res = await $publicApi.get('/api/posts')
		console.log(res.data)
	}

	return (
		<div className={classNames('', {}, [className])}>
			{t('home')}
			<form onSubmit={e => formHandler(e)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
				<input type="text" name="username" placeholder="username" />
				<input type="password" name="password" placeholder="password" />
				<Button type="submit">Submit</Button>
			</form>
			<Button onClick={getData}>Get data</Button>
		</div>
	)
}

export default HomePage
