import { useState } from 'react'
import './theme-toggle.css'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
	return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>(getInitialTheme)

	function toggleTheme() {
		const next: Theme = theme === 'dark' ? 'light' : 'dark'

		document.documentElement.dataset.theme = next
		setTheme(next)

		try {
			localStorage.setItem('theme', next)
		} catch {
			// Armazenamento indisponível: o tema vale apenas para esta visita.
		}
	}

	const isDark = theme === 'dark'

	return (
		<button
			type="button"
			className="theme-toggle"
			onClick={toggleTheme}
			aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
			title={isDark ? 'Tema claro' : 'Tema escuro'}
		>
			<span aria-hidden="true">{isDark ? '☀' : '☾'}</span>
		</button>
	)
}

export default ThemeToggle
