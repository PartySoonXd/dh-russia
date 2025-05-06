import { BrowserRouter } from 'react-router-dom'

import App from '@app/App'
import { ThemeProvider } from '@app/providers/ThemeProvider'

import './shared/config/i18n/i18n'
import { ErrorBoundary } from '@app/providers/ErrorBoundary'
import { createRoot } from 'react-dom/client'

const domNode = document.getElementById('root')
if (domNode) {
	const root = createRoot(domNode)
	root.render(
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>,
	)
}
