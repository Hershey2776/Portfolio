import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/layout'
import Home from './components/home/home'
import About from './components/about/About'
import Projects from './components/ProjectPage/Projects/Projects'
import ProjectDisplay from './components/ProjectPage/ProjectDisplay/ProjectDisplay'
import Contact from './components/Contact/Contact'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="projects" element={<Projects />} />
                        <Route
                            exact
                            path="project/:id"
                            element={<ProjectDisplay />}
                        />
                        <Route exact path="about" element={<About />} />
                        <Route exact path="Contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}
export default App
