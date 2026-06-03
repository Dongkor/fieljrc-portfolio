import styles from './App.module.css'
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Experience from './components/Experience/Experience.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contacts from './components/Contacts/Contacts.jsx'

function App() {
    return (
        <div className={styles.app}>
            <NavBar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contacts />
            </main>
        </div>
    )
}

export default App
