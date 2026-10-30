export type SocialProject = {
  label: string
  name: string
  subtitle: string
  about: string
  demoUrl?: string
  image?: string
  imageAlt?: string
}

export const socialProjects: SocialProject[] = [
  { 
      label: 'Educação · Projeto Educativo',
      name: 'EcoKids',
      subtitle: 'Aplicativo educativo para crianças',
      about: 'Projeto desenvolvido para escolas, com o objetivo de ensinar criaças sobre o meio ambiente e as fontes renováveis. Desenvolvido e apresentado em parceria com a escola Fazenda Velha',
      image: '/images/projeto1.jpg'  
  }
]