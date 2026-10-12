import { profile } from '../../data/profile'
import './about.css'

function About() {
	return (
		<section className="about-section" id="sobre">
			<h2>
				Sobre <em>mim</em>
				<span className="title-dot">.</span>
			</h2>
			<p>
				Sou estudante de {profile.course}, atualmente no {profile.semester}.
				Gosto de transformar o que aprendo em aula em projetos reais e
				publicá-los para evoluir com prática.
			</p>
		</section>
	)
}

export default About
