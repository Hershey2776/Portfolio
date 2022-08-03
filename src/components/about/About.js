import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const About = () => {
    const [letterC, sLetterC] = useState('text-animate')
    useEffect(() => {
        return setTimeout(() => {
            sLetterC('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <div className="Skills">
                <section class="skills-section my-skills" id="skills">
                    <h1 class="text-skills" data-aos="slide-up">
                        Skills
                    </h1>
                    <img
                        src="https://raw.githubusercontent.com/Sacsam005/my_portfolio_website/0fc1dccb57e4a40e1751d695fbd5b8048fae6471/img/skills.svg"
                        alt="Skills"
                        data-aos="zoom-out"
                    />
                </section>
            </div>
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
