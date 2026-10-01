import './header.css'

function Header() {
	return (
		<header className="site-header">
			<a className="site-header__brand" href="#inicio">
				Nicolas Letti
			</a>
			<nav aria-label="Navegação principal">
				<a href="#sobre">Sobre</a>
				<a href="#projetos">Projetos</a>
				<a href="#contato">Contato</a>
			</nav>
		</header>
	)
}

export default Header
