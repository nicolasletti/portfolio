import { profile } from '../../data/profile'
import './footer.css'

function Footer() {
	return (
		<footer className="site-footer" id="contato">
			<div className="site-footer__inner">
				<nav aria-label="Navegação do rodapé">
					<ul className="site-footer__links">
						<li><a href="#sobre">home</a></li>
						<li><a href="#projetos">projects</a></li>
						<li><a href="#contato">contact</a></li>
					</ul>
				</nav>

				<ul className="site-footer__links">
					<li>
						<a href={profile.email} target="_blank" rel="noreferrer">
							e-mail
						</a>
					</li>
					<li>
						<a href={profile.github} target="_blank" rel="noreferrer">
							github
						</a>
					</li>
					<li>
						<a href={profile.linkedin} target="_blank" rel="noreferrer">
							linkedin
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
