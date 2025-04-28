import { classNames } from './classNames'

describe('classNames', () => {
	test('All params', () => {
		const expected = 'class1 class2 additional1 additional2 withCondition'
		expect(classNames('class1 class2', { withCondition: true }, ['additional1', 'additional2'])).toBe(expected)
	})
	test('All params and mode false', () => {
		const expected = 'class1 class2 additional1 additional2'
		expect(classNames('class1 class2', { withCondition: false }, ['additional1', 'additional2'])).toBe(expected)
	})
	test('Without mods', () => {
		const expected = 'class1 class2 additional1 additional2'
		expect(classNames('class1 class2', {}, ['additional1', 'additional2'])).toBe(expected)
	})
	test('Without additional', () => {
		const expected = 'class1 class2 withCondition'
		expect(classNames('class1 class2', { withCondition: true }, [])).toBe(expected)
	})
	test('Only classes', () => {
		const expected = 'class1 class2'
		expect(classNames('class1 class2')).toBe(expected)
	})
})
