import { useEffect, useState } from 'react'
import './projects.css'

type GitHubRepository = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  fork: boolean
}

const GITHUB_USERNAME = 'nicolasletti'
const FEATURED_REPOSITORIES = ['Projeto-Saude-Maix', 'portfolio']

function isGitHubRepository(value: unknown): value is GitHubRepository {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const repository = value as Record<string, unknown>

  return (
    typeof repository.id === 'number' &&
    typeof repository.name === 'string' &&
    typeof repository.html_url === 'string' &&
    (typeof repository.description === 'string' || repository.description === null) &&
    (typeof repository.language === 'string' || repository.language === null) &&
    typeof repository.stargazers_count === 'number' &&
    typeof repository.fork === 'boolean'
  )
}

function Projects() {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadRepositories() {
      try {
        const responses = await Promise.all(
          FEATURED_REPOSITORIES.map(async (repositoryName) => {
            const response = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${repositoryName}`,
              {
                headers: {
                  Accept: 'application/vnd.github+json',
                },
                signal: controller.signal,
              },
            )

            if (!response.ok) {
              throw new Error(
                `Não foi possível importar o repositório "${repositoryName}" (status ${response.status}).`,
              )
            }

            const data: unknown = await response.json()

            if (!isGitHubRepository(data)) {
              throw new Error(
                `A resposta do repositório "${repositoryName}" não está no formato esperado.`,
              )
            }

            return data
          }),
        )

        setRepositories(responses.filter((repository) => !repository.fork))
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        setErrorMessage(
          error instanceof Error
            ? error.message
            : 'Não foi possível carregar os projetos do GitHub.',
        )
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    void loadRepositories()

    return () => controller.abort()
  }, [])

  return (
    <section className="projects-section" id="projetos">
      <div className="projects-section__heading">
        <p className="projects-section__eyebrow">Código aberto</p>
        <h2>Projetos em destaque</h2>
        <p>Uma seleção dos meus projetos públicos mais recentes no GitHub.</p>
      </div>

      {isLoading && <p className="projects-section__status">Carregando projetos...</p>}

      {!isLoading && errorMessage && (
        <div className="projects-section__status projects-section__status--error" role="alert">
          <p>Não foi possível carregar os projetos agora.</p>
          <small>{errorMessage}</small>
        </div>
      )}

      {!isLoading && !errorMessage && repositories.length === 0 && (
        <p className="projects-section__status">Nenhum projeto público encontrado.</p>
      )}

      {!isLoading && !errorMessage && repositories.length > 0 && (
        <div className="projects-grid">
          {repositories.map((repository) => (
            <article className="project-card" key={repository.id}>
              <div>
                <div className="project-card__meta">
                  <span>GitHub</span>
                  {repository.language && <span>{repository.language}</span>}
                </div>
                <h3>{repository.name}</h3>
                <p>{repository.description ?? 'Projeto sem descrição.'}</p>
              </div>
              <div className="project-card__footer">
                <span aria-label={`${repository.stargazers_count} estrelas`}>
                  ★ {repository.stargazers_count}
                </span>
                <a href={repository.html_url} target="_blank" rel="noreferrer">
                  Ver projeto <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      <a
        className="projects-section__profile-link"
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noreferrer"
      >
        Ver perfil completo no GitHub <span aria-hidden="true">↗</span>
      </a>
    </section>
  )
}

export default Projects
