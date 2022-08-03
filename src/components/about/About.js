import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Skills from '../Skills/Skills'

const About = () => {
    const [letterC, sLetterC] = useState('text-animate')
    useEffect(() => {
        return setTimeout(() => {
            sLetterC('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <Skills></Skills>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterC}
                            strArray={[
                                'A',
                                'B',
                                'O',
                                'U',
                                'T',
                                ' ',
                                'M',
                                'E',
                                '.',
                            ]}
                            idx={15}
                        ></AnimatedLetters>
                    </h1>
                    <p>
                        Howdy, I am Hershey a sysadmin on someone else's system
                        and a full stack developer. Sometimes I like to code
                        sometimes I like to watch MotoGP or Boxing or Football
                        or play CS:GO.
                    </p>
                    <p>
                        If I need to define myself in one line that would be a
                        "quick learner who is very curious to learn :)".
                    </p>
                    <p>
                        Talking about my skills, I am MERN developer but I am a
                        wizard in python:). Currently I am persuing OSCP and
                        CCNA.
                    </p>
                </div>
            </div>
            <Loader type="pacman"></Loader>
        </>
    )
}

export default About
