import './styles/index.scss'

import { classNames } from '@shared/lib/classNames/classNames'
import { Header } from '@widgets/Header'
import { Suspense } from 'react'
import { PageLoader } from '@widgets/PageLoader'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/AppRouter'
import { Footer } from '@widgets/Footer'

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={<PageLoader />}>
				<Header />
				<main className="content" style={{ flexGrow: 1 }}>
					<AppRouter />
				</main>
				<Footer />
			</Suspense>
		</div>
	)
}

export default App
