import { profile } from '../../data/profile'
import './footer.css'

function Footer() {
	return (
		<footer className="site-footer" id="contato">
			<div className="site-footer__inner">
				<div>
					<h2>
						Vamos <em>conversar</em>
						<span className="title-dot">.</span>
					</h2>
				</div>

				<ul className="site-footer__links">
					<li>
						<strong>E-mail</strong>
						<a href={`mailto:${profile.email}`}>{profile.email}</a>
					</li>
					<li>
						<strong>GitHub</strong>
						<a href={profile.github} target="_blank" rel="noreferrer">
							github.com/nicolasletti
						</a>
					</li>
					<li>
						<strong>LinkedIn</strong>
						<a href={profile.linkedin} target="_blank" rel="noreferrer">
							linkedin.com/in/nicolas-letti
						</a>
					</li>

				</ul>
			</div>
		</footer>
	)
}

export default Footer
