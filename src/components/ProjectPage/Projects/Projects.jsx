import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters'
import ProjectItem from '../ProjectItem/ProjectItem'
import { projectList } from '../ProjectItem/ProjectList'
import './Projects.css'
import Loader from 'react-loaders'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="projects">
                <h1 className="projectTitle">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k', '.']}
                        idx={1}
                    />
                </h1>
                <div className="projectList">
                    {projectList.map((project, idx) => {
                        return (
                            <ProjectItem
                                id={idx}
                                name={project.name}
                                image={project.image}
                            />
                        )
                    })}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects
