import React from 'react'
import './sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import {
    GrHomeRounded,
    GrUser,
    GrMailOption,
    GrLinkedinOption,
    GrGithub,
    GrProjects,
    GrInstagram,
} from 'react-icons/gr'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img
                    src="https://raw.githubusercontent.com/Hershey2776/Portfolio/main/src/assets/images/H.svg"
                    alt="logo"
                />
                <img
                    className="sub-logo"
                    src="https://raw.githubusercontent.com/Hershey2776/Portfolio/main/src/assets/images/hershey.svg"
                    alt="slobodan"
                />
            </Link>
            <nav>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className=" home-link"
                    to="/"
                >
                    <IconContext.Provider
                        value={{ className: 'icon react-icons' }}
                    >
                        <GrHomeRounded />
                    </IconContext.Provider>
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="projects-link"
                    to="/projects"
                >
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        <GrProjects />
                    </IconContext.Provider>
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                >
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        <GrUser />
                    </IconContext.Provider>
                </NavLink>

                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                >
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        <GrMailOption />
                    </IconContext.Provider>
                </NavLink>

                <ul>
                    <li>
                        <a
                            className="linkedin"
                            target="_blank"
                            rel="noreferrer"
                            href="https://linkedin.com/in/hershey2776"
                        >
                            <IconContext.Provider
                                value={{ className: 'react-icons' }}
                            >
                                <GrLinkedinOption />
                            </IconContext.Provider>
                        </a>
                    </li>
                    <li>
                        <a
                            className="GitHub"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/Hershey2776"
                        >
                            <IconContext.Provider
                                value={{ className: 'react-icons' }}
                            >
                                <GrGithub />
                            </IconContext.Provider>
                        </a>
                    </li>
                    <li>
                        <a
                            className="Instagram"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/x.hershey.xx/"
                        >
                            <IconContext.Provider
                                value={{ className: 'react-icons' }}
                            >
                                <GrInstagram />
                            </IconContext.Provider>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
