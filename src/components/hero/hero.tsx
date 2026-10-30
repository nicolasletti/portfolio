import { useEffect, useRef } from 'react'
import { profile } from '../../data/profile'
import './hero.css'

/* Fundo inspirado na capa de "Noites Brancas": prédios hachurados, sol e raios. */
const buildings = [
	{ pattern: 'dots', left: 9, width: 3, height: 55 },
	{ pattern: 'diagonal', left: 31, width: 6, height: 62 },
	{ pattern: 'horizontal', left: 39, width: 12, height: 80 },
	{ pattern: 'diagonal', left: 53, width: 7, height: 58 },
	{ pattern: 'horizontal', left: 62, width: 14, height: 90 },
	{ pattern: 'diagonal', left: 78, width: 6, height: 66 },
	{ pattern: 'horizontal', left: 86, width: 9, height: 94 },
	{ pattern: 'dots', left: 96, width: 4, height: 52 },
]

const rays = [
	{ angle: -150, length: 560, thickness: 34, offset: 110 },
	{ angle: -118, length: 380, thickness: 22, offset: 118 },
	{ angle: -84, length: 300, thickness: 26, offset: 114 },
	{ angle: -55, length: 440, thickness: 30, offset: 112 },
	{ angle: -22, length: 540, thickness: 24, offset: 118 },
	{ angle: 10, length: 300, thickness: 18, offset: 110 },
	{ angle: 36, length: 580, thickness: 38, offset: 108 },
	{ angle: 70, length: 420, thickness: 20, offset: 114 },
	{ angle: 98, length: 540, thickness: 42, offset: 104 },
	{ angle: 127, length: 460, thickness: 26, offset: 114 },
	{ angle: 164, length: 640, thickness: 30, offset: 108 },
	{ angle: 196, length: 360, thickness: 20, offset: 118 },
]

function Hero() {
	const sectionRef = useRef<HTMLElement>(null)

	// Paralaxe: posição do mouse e rolagem viram variáveis CSS (--mx, --my, --sy).
	useEffect(() => {
		const section = sectionRef.current
		if (!section) return
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

		let frame = 0
		let mx = 0
		let my = 0

		const apply = () => {
			frame = 0
			const scroll = Math.min(window.scrollY, section.offsetHeight)
			section.style.setProperty('--mx', mx.toFixed(3))
			section.style.setProperty('--my', my.toFixed(3))
			section.style.setProperty('--sy', scroll.toFixed(0))
		}
		const schedule = () => {
			if (!frame) frame = requestAnimationFrame(apply)
		}
		const onPointerMove = (event: PointerEvent) => {
			if (event.pointerType !== 'mouse') return
			const rect = section.getBoundingClientRect()
			mx = (event.clientX - rect.left) / rect.width - 0.5
			my = (event.clientY - rect.top) / rect.height - 0.5
			schedule()
		}
		const onPointerLeave = () => {
			mx = 0
			my = 0
			schedule()
		}

		section.addEventListener('pointermove', onPointerMove)
		section.addEventListener('pointerleave', onPointerLeave)
		window.addEventListener('scroll', schedule, { passive: true })
		schedule()

		return () => {
			cancelAnimationFrame(frame)
			section.removeEventListener('pointermove', onPointerMove)
			section.removeEventListener('pointerleave', onPointerLeave)
			window.removeEventListener('scroll', schedule)
		}
	}, [])

	return (
		<section className="hero-section" id="inicio" ref={sectionRef}>
			<div className="hero-art" aria-hidden="true">
				<div className="hero-art__layer hero-art__layer--back">
					{buildings.map((building, index) => (
						<div
							className={`hero-art__building hero-art__building--${building.pattern}`}
							key={index}
							style={{
								left: `${building.left}%`,
								width: `${building.width}%`,
								height: `${building.height}%`,
							}}
						/>
					))}
				</div>
				<div className="hero-art__layer hero-art__layer--sun">
					<div className="hero-art__sun" />
				</div>
				<div className="hero-art__layer hero-art__layer--front">
					<div className="hero-art__rays">
						{rays.map((ray, index) => (
							<div
								className="hero-art__ray"
								key={index}
								style={{
									width: ray.length,
									height: ray.thickness,
									marginTop: -ray.thickness / 2,
									transform: `rotate(${ray.angle}deg) translateX(${ray.offset}px)`,
								}}
							/>
						))}
					</div>
					<div className="hero-art__pole" style={{ left: '72%', width: 5, height: '46%' }} />
					<div className="hero-art__pole" style={{ left: '93%', width: 3, height: '34%' }} />
				</div>
			</div>

			<div className="hero-section__inner">
				<div className="hero-section__content">
					<h1>
						Desenvolvedor
						<br />
						Junior - Nicolas
						<br />
						Letti
						<span className="title-dot">.</span>
					</h1>
					<p className="hero-section__description">
						Construo experiências digitais claras e úteis. Sou estudante de{' '}
						{profile.course} e desenvolvedor focado em soluções digitais.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Hero
