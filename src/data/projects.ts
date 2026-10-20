export type Project = {  repo: string
  label: string
  name: string
  subtitle: string
  about: string
  stack: string[]
  demoUrl?: string
  image?: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    repo: 'Projeto-Saude-Maix',
    label: 'Saúde · Projeto web',
    name: 'Saúde Maix',
    subtitle: 'Triagem da Síndrome do X Frágil',
    about:
      'Sistema web de apoio à triagem da Síndrome do X Frágil, para auxiliar profissionais da saúde na avaliação de indicadores clínicos.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Python'],
    demoUrl: 'https://nicolasletti.github.io/Projeto-Saude-Maix/',
  },
  {
    repo: 'portfolio',
    label: 'Pessoal · Site',
    name: 'Portfólio',
    subtitle: 'Página pessoal com projetos e contato',
    about:
      'Este site: uma página única e responsiva que reúne apresentação, projetos e contato.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
  },
]
