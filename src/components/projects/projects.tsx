import { useState } from 'react'
import { profile } from '../../data/profile'
import { projects } from '../../data/projects'
import './projects.css'

function pad(value: number) {
  return String(value).padStart(2, '0')
}

function Projects() {
  return (
    <section className="projects-section" id="projetos">
      <h2>Projetos em Destaque<span className="title-dot">.</span></h2>
      
    </section>
  )
}

export default Projects
