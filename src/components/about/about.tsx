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
		</section>
	)
}

export default About
