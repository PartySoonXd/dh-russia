import { RouteProps } from 'react-router-dom'
import { AppRoutes } from './appRoutes'
import { RoutePaths } from './routePaths'

import { HomePage } from '@pages/HomePage'
import { AboutPage } from '@pages/AboutPage'
import { NotFoundPage } from '@pages/NotFoundPage'
import { ArticlePage } from '@pages/ArticlePage'
import { BlogPage } from '@pages/BlogPage'
import { EducationalResourcesPage } from '@pages/EducationalResourcesPage'
import { EventPage } from '@pages/EventPage'
import { EventsPage } from '@pages/EventsPage'
import { NewsPage } from '@pages/NewsPage'
import { PartnersPage } from '@pages/PartnersPage'
import { PolicyPage } from '@pages/PolicyPage'
import { ProjectPage } from '@pages/ProjectPage'
import { ProjectsPage } from '@pages/ProjectsPage'

export const RouteConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.HOME]: {
		path: RoutePaths.home,
		element: <HomePage />,
	},
	[AppRoutes.ARTICLE]: {
		path: RoutePaths.article,
		element: <ArticlePage />,
	},
	[AppRoutes.BLOG]: {
		path: RoutePaths.blog,
		element: <BlogPage />,
	},
	[AppRoutes.EDUCATIONAL_RESOURCES]: {
		path: RoutePaths['educational-resources'],
		element: <EducationalResourcesPage />,
	},
	[AppRoutes.EVENT]: {
		path: RoutePaths.event,
		element: <EventPage />,
	},
	[AppRoutes.EVENTS]: {
		path: RoutePaths.events,
		element: <EventsPage />,
	},
	[AppRoutes.NEWS]: {
		path: RoutePaths.news,
		element: <NewsPage />,
	},
	[AppRoutes.PARTNERS]: {
		path: RoutePaths.partners,
		element: <PartnersPage />,
	},
	[AppRoutes.POLICY]: {
		path: RoutePaths.policy,
		element: <PolicyPage />,
	},
	[AppRoutes.PROJECT]: {
		path: RoutePaths.project,
		element: <ProjectPage />,
	},
	[AppRoutes.PROJECTS]: {
		path: RoutePaths.projects,
		element: <ProjectsPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePaths.about,
		element: <AboutPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePaths['not-found'],
		element: <NotFoundPage />,
	},
}
