import React from 'react'
import './App.css'
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
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="index" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="project/:id" element={<ProjectDisplay />} />
                    <Route path="about" element={<About />} />
                    <Route path="Contact" element={<Contact />} />
                    {/* <Route path="" element={<About />}/> */}
                </Route>
            </Routes>
        </>
    )
}
export default App
