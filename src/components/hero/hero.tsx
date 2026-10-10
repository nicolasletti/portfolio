import { profile } from '../../data/profile'
import './hero.css'

function Hero() {
	return (
		<section className="hero-section" id="inicio">
			<p className="hero-section__eyebrow">
				{profile.course} · {profile.semester}
			</p>
			<h1>Construo experiências digitais claras e úteis.</h1>
			<p className="hero-section__description">
				Sou {profile.name}, estudante de {profile.course} e desenvolvedor focado
				em criar soluções digitais intuitivas e eficientes.
			</p>
			<div className="hero-section__actions">
				<a className="button button--primary" href="#projetos">
					Ver projetos
				</a>
				<a
					className="button"
					href={profile.github}
					target="_blank"
					rel="noreferrer"
				>
					GitHub <span aria-hidden="true">↗</span>
				</a>
				<a
					className="button"
					href={profile.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn <span aria-hidden="true">↗</span>
				</a>
			</div>
		</section>
	)
}

export default Hero
