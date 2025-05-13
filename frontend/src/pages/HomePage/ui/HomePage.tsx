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
		const res = await $publicApi.get('/api/articles?populate[base][populate]=image&pagination[pageSize]=100')
		console.log(res.data)
	}

	const createData = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		formData.append('ref', 'api::article.article')
		formData.append('field', 'image')

		const data = {
			text: 'test text',
			title: 'test title',
			slug: `test-title-${Math.random()}`,
			user: {
				connect: ['lw1taqbyhmlwry62pk69t008'],
			},
		}
		const res = await $publicApi.post('/api/articles', { data }, {
			headers: {
				Authorization: 'Bearer b783a407c79da3b7cb78a9688f01bab7eec8dbb5e1abae5c0fc43afe31ecdee22f7961a51dab4edcf347d9313eff8aef0aecf21b8d9e6a4c0ef7be665819692310ecae3ecba47779926a2fb16775d69067f992fb82215646dd4be8d018d4811a8d46e5eee0a4375fac723a2919a63768260e2d5a39e13644e3a3d3c8309a10f9',
			},
		})
		formData.append('refId', res.data.data.id)
		await $publicApi.post('/api/upload', formData,
			{
				headers: {
					'content-type': 'multipart/form-data',
					'Authorization': 'Bearer b783a407c79da3b7cb78a9688f01bab7eec8dbb5e1abae5c0fc43afe31ecdee22f7961a51dab4edcf347d9313eff8aef0aecf21b8d9e6a4c0ef7be665819692310ecae3ecba47779926a2fb16775d69067f992fb82215646dd4be8d018d4811a8d46e5eee0a4375fac723a2919a63768260e2d5a39e13644e3a3d3c8309a10f9',
				},
			},
		)
	}

	return (
		<div className={classNames('', {}, [className])}>
			{t('home')}
			{/* <form onSubmit={e => formHandler(e)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
				<input type="text" name="username" placeholder="username" />
				<input type="password" name="password" placeholder="password" />
				<Button type="submit">Submit</Button>
			</form> */}
			{/* <Button onClick={getData}>Get data</Button> */}
			{/* <form onSubmit={e => createData(e)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
				<input type="file" name="files" placeholder="password" />
				<Button type="submit">Submit</Button>
			</form> */}
		</div>
	)
}

export default HomePage
