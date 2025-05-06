type Mods = Record<string, string | boolean>
type Additional = string | undefined

export function classNames(
	classes: string,
	mods: Mods = {},
	additional: Additional[] = []): string {
	return [
		classes,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	]
		.join(' ')
}
