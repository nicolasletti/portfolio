import Header from './components/header/header'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
