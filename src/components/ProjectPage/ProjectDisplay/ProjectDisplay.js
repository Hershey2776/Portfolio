import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../ProjectItem/ProjectList'
import { IconContext } from 'react-icons'

import { GrGithub } from 'react-icons/gr'
import './ProjectDisplay.css'
import Loader from 'react-loaders'

const ProjectDisplay = () => {
    const { id } = useParams()
    const project = projectList[id]
    return (
        <>
            <div className="project">
                <h1>{project.name}</h1>
                <img src={project.image} alt="asd" />
                <p>
                    <b>Tech:</b> {project.tech}
                </p>
                <div className="Git">
                    <span> For more info:</span>
                    <a
                        className="linkedin"
                        target="_blank"
                        rel="noreferrer"
                        href={project.git}
                    >
                        <IconContext.Provider
                            value={{ className: 'react-icons' }}
                        >
                            <GrGithub />
                        </IconContext.Provider>
                    </a>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default ProjectDisplay
