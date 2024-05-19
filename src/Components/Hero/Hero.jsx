import React from 'react';
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="text_section">
                <h2>I am <p className='name'>Adeseke Adegbenro,</p> a software developer based in the United Kingdom</h2>
                <p>Entry-level Frontend Developer with a Master's in Computing and Fintech internship experience.</p>
                <div className="hero_action">
                    <div className="hero_link">Link With Me</div>
                    <div className="hero_resume">My resume</div>
                </div>
            </div>
            <div className="image_section">
                <img src={profile_img} alt="" />
            </div>
        </div>
    )
}

export default Hero 