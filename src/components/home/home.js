import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../layout/layout.css'
import './home.css'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e', 'r', 's', 'h', 'e', 'y', ',']
    const jobArray = [
        'W',
        'e',
        'b',
        ' ',
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br /> <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _13`}>’</span>
                        <span className={`${letterClass} _14`}>m</span>
                        <img
                            className="h_image"
                            src="https://raw.githubusercontent.com/Hershey2776/Portfolio/main/src/assets/images/H.svg"
                            alt="developer"
                        ></img>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2>Full Stack Developer & Penetration Tester </h2>
                    <Link to="/contact" className="flat-button">
                        {' '}
                        Contact Me{' '}
                    </Link>
                    <a
                        href={require('../../assets/res.docx')}
                        className="flat-button CV"
                    >
                        Resume
                    </a>
                </div>
                <img
                    className="h_main"
                    src="https://raw.githubusercontent.com/Hershey2776/Portfolio/main/src/assets/images/H.svg"
                    alt="developer"
                ></img>
            </div>
        </>
    )
}

export default Home
