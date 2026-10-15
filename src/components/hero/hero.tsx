import { profile } from '../../data/profile'
import './hero.css'

function Hero() {
	return (
		<section className="hero-section" id="inicio">
			<div className="hero-section__content">
				<h1>
					Nicolas <em>Letti</em>
					<span className="title-dot">.</span>
				</h1>
				<p className="hero-section__description">
					Construo experiências digitais claras e úteis. Sou estudante de{' '}
					{profile.course} e desenvolvedor focado em soluções digitais.
				</p>
				<div className="hero-section__actions">
					<a className="button button--primary" href="#projetos">
						Ver projetos
					</a>
				</div>
			</div>

			<img
				className="hero-section__photo"
				src={profile.avatar}
				alt={`Foto de ${profile.name}`}
				width={260}
				height={260}
			/>
		</section>
	)
}

export default Hero
