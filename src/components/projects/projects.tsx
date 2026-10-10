import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import { projects } from '../../data/projects'
import './projects.css'

type GitHubStats = {
  stars: number
}

const GITHUB_USERNAME = profile.github.split('/').pop() ?? ''

function isStargazerPayload(
  value: unknown,
): value is { stargazers_count: number } {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as Record<string, unknown>).stargazers_count === 'number'
  )
}

function Projects() {
  const [stats, setStats] = useState<Record<string, GitHubStats>>({})

  // A API do GitHub só complementa os cards (estrelas). Se falhar, os dados
  // curados em src/data/projects.ts continuam sendo exibidos.
  useEffect(() => {
    const controller = new AbortController()

    async function loadStats() {
      const entries = await Promise.all(
        projects.map(async ({ repo }) => {
          try {
            const response = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}`,
              {
                headers: { Accept: 'application/vnd.github+json' },
                signal: controller.signal,
              },
            )

            if (!response.ok) return null

            const data: unknown = await response.json()

            return isStargazerPayload(data)
              ? ([repo, { stars: data.stargazers_count }] as const)
              : null
          } catch {
            return null
          }
        }),
      )

      if (controller.signal.aborted) return

      setStats(
        Object.fromEntries(
          entries.filter((entry) => entry !== null),
        ) as Record<string, GitHubStats>,
      )
    }

    void loadStats()

    return () => controller.abort()
  }, [])

  return (
    <section className="projects-section" id="projetos">
      <div className="projects-section__heading">
        <p className="projects-section__eyebrow">· 02 · Projetos</p>
        <h2>Projetos em destaque</h2>
        <p>Uma seleção dos meus projetos públicos no GitHub.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const repoUrl = `${profile.github}/${project.repo}`
          const stars = stats[project.repo]?.stars

          return (
            <article className="project-card" key={project.repo}>
              <div>
                <div className="project-card__meta">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{project.repo}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                {project.impact && (
                  <div className="project-card__block">
                    <h4>Impacto</h4>
                    <p>{project.impact}</p>
                  </div>
                )}

                <div className="project-card__block">
                  <h4>Stack</h4>
                  <ul className="project-card__stack">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-card__footer">
                <span>
                  {stars !== undefined && (
                    <span aria-label={`${stars} estrelas`}>★ {stars}</span>
                  )}
                </span>
                <span className="project-card__links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      Demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <a href={repoUrl} target="_blank" rel="noreferrer">
                    Repositório <span aria-hidden="true">↗</span>
                  </a>
                </span>
              </div>
            </article>
          )
        })}
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
