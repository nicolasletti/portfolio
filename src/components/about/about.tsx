import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import { ABOUT_SLIDE_INTERVAL_MS, aboutImages } from '../../data/about-images'
import './about.css'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function About() {
	const [active, setActive] = useState(0)
	const [paused, setPaused] = useState(false)
	const [reducedMotion, setReducedMotion] = useState(
		() => window.matchMedia(REDUCED_MOTION_QUERY).matches,
	)

	// Acompanha a preferência do sistema, inclusive se mudar com a página aberta.
	useEffect(() => {
		const media = window.matchMedia(REDUCED_MOTION_QUERY)
		const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
		media.addEventListener('change', onChange)
		return () => media.removeEventListener('change', onChange)
	}, [])

	// Troca automática. O cleanup limpa o timer ao desmontar ou quando as
	// dependências mudam (pausa/movimento reduzido), evitando timers duplicados.
	useEffect(() => {
		if (paused || reducedMotion) return
		const id = setInterval(() => {
			setActive((i) => (i + 1) % aboutImages.length)
		}, ABOUT_SLIDE_INTERVAL_MS)
		return () => clearInterval(id)
	}, [paused, reducedMotion])

	return (
		<section className="about-section" id="sobre">
			<div className="about-text">
				<h2>
					Sobre mim
					<span className="title-dot">.</span>
				</h2>
				<p>
					Sou estudante de {profile.course}, atualmente no {profile.semester}.
					Sou uma pessoa que sempre está em busca de aprender coisas novas, e que gosta de desafios. Gosto de trabalhar em equipe, e de compartilhar conhecimento com outras pessoas.
				</p>
			</div>

			<div
				className="about-slideshow"
				role="group"
				aria-roledescription="carrossel"
				aria-label="Fotos de Nicolas"
				onMouseEnter={() => setPaused(true)}
				onMouseLeave={() => setPaused(false)}
				onFocus={() => setPaused(true)}
				onBlur={() => setPaused(false)}
			>
				{aboutImages.map((image, index) => (
					<img
						key={image.src}
						className={index === active ? 'about-slide is-active' : 'about-slide'}
						src={image.src}
						alt={index === active ? image.alt : ''}
						aria-hidden={index !== active}
						loading={index === 0 ? 'eager' : 'lazy'}
						width={448}
						height={597}
					/>
				))}
				{/* TODO (prática): indicadores clicáveis — um <button> por imagem, com
				    aria-label="Mostrar imagem N", aria-current={index === active} e
				    onClick={() => setActive(index)}. Estilize .is-active em about.css. */}
			</div>
		</section>
	)
}

export default About
