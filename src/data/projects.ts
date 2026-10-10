export type Project = {
  /** Nome do repositório em github.com/<usuário>/<repo>. */
  repo: string
  title: string
  summary: string
  impact?: string
  stack: string[]
  demoUrl?: string
}

export const projects: Project[] = [
  {
    repo: 'Projeto-Saude-Maix',
    title: 'Triagem da Síndrome do X Frágil',
    summary:
      'Sistema web de apoio à triagem da Síndrome do X Frágil, para auxiliar profissionais da saúde na avaliação de indicadores clínicos.',
    impact:
      'Apoia o encaminhamento de pacientes para investigação genética.',
    stack: ['JavaScript', 'HTML', 'CSS', 'Python'],
    demoUrl: 'https://nicolasletti.github.io/Projeto-Saude-Maix/',
  },
  {
    repo: 'portfolio',
    title: 'Portfólio pessoal',
    summary:
      'Este site: uma página única, responsiva e com tema claro/escuro, que reúne apresentação, projetos e contato.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
  },
]
