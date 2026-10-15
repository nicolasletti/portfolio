import { profile } from '../../data/profile'
import './footer.css'

function Footer() {
	return (
		<footer className="site-footer" id="contato">
			<div className="site-footer__inner">
				<ul className="site-footer__links">
					<li>
						<a href={profile.email} target="_blank" rel="noreferrer">
							E-mail
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
