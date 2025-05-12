import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { RouteConfig } from '@shared/config/routeConfig'
import { PageLoader } from '@widgets/PageLoader'

const AppRouter = () => {
	return (
		<Routes>
			{Object.values(RouteConfig).map(({ path, element }) => (
				<Route
					path={path}
					key={path}
					element={(
						<Suspense fallback={<PageLoader />}>
							<div className="content-wrapper">
								{element}
							</div>
						</Suspense>
					)}
				/>
			))}
		</Routes>
	)
}

export default AppRouter
