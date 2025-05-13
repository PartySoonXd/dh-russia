import { BrowserRouter } from 'react-router-dom'

import App from '@app/App'
import { ThemeProvider } from '@app/providers/ThemeProvider'

import './shared/config/i18n/i18n'
import { ErrorBoundary } from '@app/providers/ErrorBoundary'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const domNode = document.getElementById('root')
const queryClient = new QueryClient()

if (domNode) {
	const root = createRoot(domNode)
	root.render(
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ErrorBoundary>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</ErrorBoundary>
			</BrowserRouter>
		</QueryClientProvider>,
	)
}
