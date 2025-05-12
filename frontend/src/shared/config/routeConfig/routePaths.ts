import { AppRoutes } from './appRoutes'

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.ARTICLE]: '/article/:slug',
	[AppRoutes.BLOG]: '/blog',
	[AppRoutes.EDUCATIONAL_RESOURCES]: '/educational-resources',
	[AppRoutes.EVENT]: '/event/:slug',
	[AppRoutes.EVENTS]: '/events',
	[AppRoutes.NEWS]: '/news',
	[AppRoutes.PARTNERS]: '/partners',
	[AppRoutes.POLICY]: '/policy',
	[AppRoutes.PROJECT]: '/project/:slug',
	[AppRoutes.PROJECTS]: '/projects',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOT_FOUND]: '*',
}
