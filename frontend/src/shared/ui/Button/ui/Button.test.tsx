import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Shared/Button test', () => {
	test('test', () => {
		render(<Button>TEST</Button>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})
})
