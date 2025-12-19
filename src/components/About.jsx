import React from 'react'
import about from "../images/About2.jpg"
import { ABOUT } from "../constants"

const About = () => (
  <section className="container mx-auto mb-16 px-4" id="about">
    <h2 className="mb-12 text-center text-3xl lg:text-4xl font-semibold">About Us</h2>
    
    <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-16">
      
      {/* Image */}
      <div className="w-full lg:w-1/2 max-w-lg">
        <img 
          src={about} 
          alt="About us"
          className="rounded-3xl w-full h-full object-cover lg:-rotate-2 shadow-lg"
        />
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2 max-w-lg flex flex-col justify-center text-center lg:text-left">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">{ABOUT.header}</h2>
        <div className="my-4 h-2 w-24 bg-rose-300 mx-auto lg:mx-0"></div>
        <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">{ABOUT.content}</p>
      </div>

    </div>
  </section>
)

export default About
