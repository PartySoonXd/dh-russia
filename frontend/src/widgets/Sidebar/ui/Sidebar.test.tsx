import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from '@shared/lib/tests/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe('Widgets/Sidebar test', () => {
	test('test', () => {
		renderWithTranslation(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
	test('toggle test', () => {
		renderWithTranslation(<Sidebar />)
		const toggleButton = screen.getByTestId('sidebar-toggle')
		fireEvent.click(toggleButton)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})
