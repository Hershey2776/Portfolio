import React, { useEffect, useState,Loader } from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../../assets/images/logo1.png'
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

    useEffect(()=>{
      return setTimeout(()=>{
      setLetterClass('text-animate-hover')
      }, 4000)
    },[])
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
                    <img src={logo1} alt="developer"></img>
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
                <Link to="/" className="flat-button CV">
                    Resume
                </Link>
            </div>
        </div>
        {/* <Loader type="pacman"></Loader> */}
        </>
    )
    
}

export default Home
