import { profile } from '../../data/profile'
import './about.css'

function About() {
	return (
		<section className="about-section" id="sobre">
			<div className="about-section__text">
				<h2>Sobre mim</h2>
				<p>
					Sou {profile.name}, estudante de {profile.course}, atualmente no{' '}
					{profile.semester}. Gosto de transformar o que aprendo em aula em
					projetos reais e publicá-los para evoluir com prática.
				</p>
				<p>
					Este portfólio é um deles: construído com React, TypeScript e Vite, é
					o meu espaço para mostrar o que já fiz e o que continuo aprendendo.
				</p>
			</div>

			<dl className="about-section__facts">
				<div>
					<dt>Formação</dt>
					<dd>{profile.course}</dd>
				</div>
				<div>
					<dt>Momento</dt>
					<dd>{profile.semester}</dd>
				</div>
				<div>
					<dt>Foco atual</dt>
					<dd>Desenvolvimento web com React e TypeScript</dd>
				</div>
			</dl>
		</section>
	)
}

export default About
