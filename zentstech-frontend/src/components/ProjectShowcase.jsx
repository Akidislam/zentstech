import React, { useEffect, useRef, useState } from 'react'
import './projectShowcase.css'

const projectsData = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description: 'Full-featured marketplace with cart, checkout and admin panel.',
		tech: ['React', 'Node.js', 'MongoDB'],
	},
	{
		id: 2,
		title: 'Restaurant Website',
		description: 'Fast, responsive website with menu, booking and maps.',
		tech: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		id: 3,
		title: 'AI Chatbot System',
		description: 'Conversational assistant integrated with company APIs.',
		tech: ['Python', 'AI', 'API'],
	},
	{
		id: 4,
		title: 'Company Portfolio Website',
		description: 'Modern portfolio site showcasing company services and case studies.',
		tech: ['React', 'Tailwind'],
	},
]

export default function ProjectShowcase() {
	const [index, setIndex] = useState(0)
	const [visible, setVisible] = useState(3)
	const stageRef = useRef(null)
	const autoplayRef = useRef(null)

	useEffect(() => {
		function updateVisible() {
			const w = window.innerWidth
			if (w < 640) setVisible(1)
			else if (w < 1024) setVisible(2)
			else setVisible(3)
		}
		updateVisible()
		window.addEventListener('resize', updateVisible)
		return () => window.removeEventListener('resize', updateVisible)
	}, [])

	const maxIndex = Math.max(0, projectsData.length - visible)

	function moveProj(dir) {
		setIndex((prev) => {
			let next = prev + dir
			if (next < 0) next = maxIndex
			if (next > maxIndex) next = 0
			return next
		})
	}

	useEffect(() => {
		// autoplay every 5s
		autoplayRef.current = setInterval(() => moveProj(1), 5000)
		return () => clearInterval(autoplayRef.current)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [visible])

	function goToDot(i) {
		setIndex(i)
		// restart autoplay
		clearInterval(autoplayRef.current)
		autoplayRef.current = setInterval(() => moveProj(1), 5000)
	}

	// translate value
	const translatePercent = -(index * (100 / visible))

	return (
		<section className="proj-sec" id="projects">
			<div className="proj-head rv" style={{ textAlign: 'center' }}>
				<div className="stag" style={{ justifyContent: 'center', marginBottom: '1rem' }}>Our Work</div>
				<span className="proj-bg-word">PROJECTS</span>
				<div className="proj-sub-line">Real Products. Real Impact. Real Clients.</div>
			</div>

			<div className="proj-stage rv" id="projStage">
				<div
					className="proj-track"
					ref={stageRef}
					style={{ transform: `translateX(${translatePercent}%)` }}
				>
					{projectsData.map((p) => (
						<article className="proj-card" key={p.id}>
							<div className="proj-img-wrap">
								<div className="proj-img" role="img" aria-label={p.title}>
									<div className="proj-img-overlay" />
								</div>
							</div>

							<div className="proj-body">
								<h3 className="proj-title">{p.title}</h3>
								<p className="proj-desc">{p.description}</p>

								<div className="proj-tags">
									{p.tech.map((t) => (
										<span key={t} className="proj-tag">{t}</span>
									))}
								</div>

								<div className="proj-cta">
									<button className="btn-view btn-glow">View Project</button>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>

			<div className="proj-controls rv">
				<button className="parr" onClick={() => moveProj(-1)}>←</button>
				<div className="pdots" id="projDots">
					{Array.from({ length: maxIndex + 1 }).map((_, i) => (
						<button
							key={i}
							className={`pdot ${i === index ? 'active' : ''}`}
							onClick={() => goToDot(i)}
							aria-label={`Go to slide ${i + 1}`}
						/>
					))}
				</div>
				<button className="parr" onClick={() => moveProj(1)}>→</button>
			</div>
		</section>
	)
}

