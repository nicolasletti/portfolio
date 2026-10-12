import { skillGroups } from '../../data/skills'
import './skills.css'

function Skills() {
	return (
		<section className="skills-section" id="skills">
			<p className="eyebrow">
				· 02 · <span>Skills</span>
			</p>
			<h2>
				Minhas <em>ferramentas</em>
				<span className="title-dot">.</span>
			</h2>

			<div className="skills-section__grid">
				{skillGroups.map((group) => (
					<div className="skills-section__group" key={group.title}>
						<h3>{group.title}</h3>
						<p>{group.items.join(' · ')}</p>
					</div>
				))}
			</div>

			<p className="skills-section__note">
				Somente tecnologias presentes nos meus repositórios.
			</p>
		</section>
	)
}

export default Skills
