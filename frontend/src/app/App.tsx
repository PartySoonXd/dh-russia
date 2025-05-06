import './styles/index.scss'

import { classNames } from '@shared/lib/classNames/classNames'
import { Navbar } from '@widgets/Navbar'
import { Suspense } from 'react'
import { PageLoader } from '@widgets/PageLoader'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/AppRouter'

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={<PageLoader />}>
				<Navbar />
				<main className="content">
					<AppRouter />
				</main>
			</Suspense>
		</div>
	)
}

export default App
