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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. <br /> Sunt magni corrupti ipsa nostrum maiores.
                        Soluta vero fugit magni possimus atque! <br /> Cum quasi
                        similique suscipit alias.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. <br /> Aperiam nisi necessitatibus saepe
                        repellendus adipisci quae! <br /> Totam dicta aliquam et
                        sit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. <br /> Quae, praesentium! Illo nobis deleniti
                        voluptatibus nemo?
                    </p>
                </div>
            </div>
            <Loader type="pacman"></Loader>
        </>
    )
}

export default About
