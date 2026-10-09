import Header from './components/header/header'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Projects from './components/projects/projects'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App
