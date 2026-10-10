import { useState } from 'react'
import ThemeToggle from '../theme-toggle/theme-toggle'
import './header.css'

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const closeMenu = () => setIsMenuOpen(false)

	return (
		<header className="site-header">
			<div className="site-header__inner">
				<a className="site-header__brand" href="#inicio" onClick={closeMenu}>
					Nicolas Letti
				</a>

				<nav
					id="main-nav"
					className={`site-header__nav${isMenuOpen ? ' site-header__nav--open' : ''}`}
					aria-label="Navegação principal"
				>
					<a href="#sobre" onClick={closeMenu}>Sobre</a>
					<a href="#projetos" onClick={closeMenu}>Projetos</a>
					<a href="#contato" onClick={closeMenu}>Contato</a>
				</nav>

				<div className="site-header__actions">
					<ThemeToggle />
					<button
						type="button"
						className="site-header__menu-button"
						aria-expanded={isMenuOpen}
						aria-controls="main-nav"
						aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
						onClick={() => setIsMenuOpen((open) => !open)}
					>
						<span aria-hidden="true">{isMenuOpen ? '✕' : '☰'}</span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
