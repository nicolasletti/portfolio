export type SkillGroup = {
  title: string
  items: string[]
}

/** Somente tecnologias que aparecem nos repositórios públicos. */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Linguagens',
    items: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
  },
  { title: 'Front-end', items: ['React', 'Vite'] },
  { title: 'Ferramentas', items: ['Git', 'GitHub'] },
]
