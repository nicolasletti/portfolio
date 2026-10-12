import { useState } from 'react'
import { profile } from '../../data/profile'
import { projects } from '../../data/projects'
import './projects.css'

function pad(value: number) {
  return String(value).padStart(2, '0')
}

function Projects() {
  const [index, setIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  const total = projects.length
  const project = projects[index]
  const repoUrl = `${profile.github}/${project.repo}`
  const cloneCommand = `git clone ${repoUrl}.git`

  function goTo(next: number) {
    setIndex((next + total) % total)
    setCopied(false)
  }

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(cloneCommand)
      setCopied(true)
    } catch {
      // Sem permissão de área de transferência: o comando segue visível.
    }
  }

  return (
    <section className="projects-section" id="projetos">
      <p className="eyebrow">
        · 03 · <span>Portfólio</span>
      </p>

      <div className="projects-section__heading">
        <h2>
          Projetos em <em>destaque</em>
          <span className="title-dot">.</span>
        </h2>

        <div className="projects-section__nav">
          <p aria-live="polite">
            <span>{pad(index + 1)}</span> / {pad(total)}
          </p>
          <button
            type="button"
            className="projects-section__round"
            aria-label="Projeto anterior"
            onClick={() => goTo(index - 1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className="projects-section__round"
            aria-label="Próximo projeto"
            onClick={() => goTo(index + 1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="projects-section__body">
        <article className="project-preview" aria-label="Visualização do projeto">
          <p className="project-preview__label">{project.label}</p>

          {project.image ? (
            <img
              className="project-preview__media"
              src={project.image}
              alt={project.imageAlt ?? `Tela do projeto ${project.name}`}
            />
          ) : (
            <div className="project-preview__media project-preview__media--empty" aria-hidden="true">
              <span>~/{project.repo}</span>
            </div>
          )}

          <div className="project-preview__title">
            <h3>{project.name}</h3>
            <p>{project.subtitle}</p>
          </div>
        </article>

        <div className="projects-section__side">
          <div className="terminal">
            <div className="terminal__bar">
              <span aria-hidden="true">▣</span>
              <span>Prompt de Comando</span>
            </div>

            <div className="terminal__body">
              <div>
                <p className="terminal__prompt">
                  C:\projetos\{project.repo}&gt; <span>type sobre.txt</span>
                </p>
                <p className="terminal__output">{project.about}</p>
              </div>

              <div>
                <p className="terminal__prompt">
                  C:\projetos\{project.repo}&gt; <span>type stack.txt</span>
                </p>
                <ul className="terminal__stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="terminal__prompt">
                  C:\projetos&gt; <span>git clone</span>
                </p>
                <div className="terminal__clone">
                  <code>{cloneCommand}</code>
                  <button
                    type="button"
                    onClick={copyCommand}
                    aria-label="Copiar comando git clone"
                  >
                    {copied ? 'Copiado ✓' : 'Copiar'}
                  </button>
                </div>
              </div>

              <p className="terminal__prompt" aria-hidden="true">
                C:\projetos\{project.repo}&gt; <span className="terminal__cursor" />
              </p>
            </div>
          </div>

          <div className="projects-section__actions">
            <a
              className="button button--primary"
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Abrir repositório <span aria-hidden="true">↗</span>
            </a>
            {project.demoUrl && (
              <a
                className="button"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ver demo <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <a
        className="projects-section__profile-link"
        href={profile.github}
        target="_blank"
        rel="noreferrer"
      >
        Ver perfil completo no GitHub <span aria-hidden="true">↗</span>
      </a>
    </section>
  )
}

export default Projects
