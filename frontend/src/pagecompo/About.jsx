import React from 'react'
import { useEffect } from 'react';
import '../css/About.css'
import AOS from 'aos';

const About = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div class="about-section" id='About-section'>
                <h1 data-aos="fade-up">ABOUT ME</h1>
                <div class="about-content">
                    <div class="about-left" data-aos="zoom-in">
                        <p>
                            I am a passionate Civil Engineer with expertise in structural analysis and design.
                            With several years of experience in planning, drafting, and managing construction projects,
                            I specialize in delivering safe and efficient structural solutions. My focus lies in utilizing
                            modern software tools and sustainable practices to create long-lasting infrastructures.
                        </p>
                    </div>
                    <div class="about-right" data-aos="zoom-in">
                        <img src="./images/myimg.png" alt="About Me" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
