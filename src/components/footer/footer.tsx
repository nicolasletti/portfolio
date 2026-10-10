import { profile } from '../../data/profile'
import './footer.css'

function Footer() {
	return (
		<footer className="site-footer" id="contato">
			<div className="site-footer__inner">
				<div>
					<p className="site-footer__name">{profile.name}</p>
					<p>
						{profile.course} · {profile.semester}
					</p>
				</div>

				<nav aria-label="Navegação do rodapé">
					<h2>Navegação</h2>
					<a href="#sobre">Sobre</a>
					<a href="#projetos">Projetos</a>
				</nav>

				<div>
					<h2>Contato</h2>
					<a href={`mailto:${profile.email}`}>{profile.email}</a>
					<a href={profile.github} target="_blank" rel="noreferrer">
						GitHub <span aria-hidden="true">↗</span>
					</a>
					<a href={profile.linkedin} target="_blank" rel="noreferrer">
						LinkedIn <span aria-hidden="true">↗</span>
					</a>
				</div>
			</div>

			<p className="site-footer__copy">
				© {new Date().getFullYear()} {profile.name}
			</p>
		</footer>
	)
}

export default Footer
