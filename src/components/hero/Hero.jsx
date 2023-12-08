import React from 'react'
import './Hero.css'
import Registation from '../Registation/Registation'
import SearchJob from '../SearchJob/SearchJob'
const Hero = () => {
  return (
    <section className="hero hero__bg section__padding">
        <div className="hero__container flex-1 flex md:flex-row items-center justify-around flex-col">
            <div className="hero__data">
                <h1 className="hero__title">Find Your Dream Job</h1>
                <p className="hero__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
                <a href="#home" className="button">Find Job</a>
            <SearchJob />
            </div>
            <Registation />
        </div>
    </section>
  )
}

export default Hero