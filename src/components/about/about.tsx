
import { profile } from '../../data/profile'
import './about.css'

function About() {
	return (
		<section className="about-section" id="sobre">
			<h2>
				Sobre mim
				<span className="title-dot">.</span>
			</h2>
			<p>
				Sou estudante de {profile.course}, atualmente no {profile.semester}.
				Sou uma pessoa que sempre está em busca de aprender coisas novas, e que gosta de desafios. Gosto de trabalhar em equipe, e de compartilhar conhecimento com outras pessoas.
			</p>
			<div className="about-section-img">
				<img src="/about-01.webp" alt="Foto de perfil" />
				<img src="/about-02.webp" alt="Imagem sobre mim" />
			</div>
		</section>
	)
}

export default About
