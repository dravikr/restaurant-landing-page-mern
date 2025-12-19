import React from 'react'
import about from "../images/About2.jpg"
import { ABOUT } from "../constants"

const About = () => (
  <section className="container mx-auto mb-16" id="about">
    <h2 className="mb-8 text-center text-3xl lg:text-4xl">About Us</h2>
    <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
      <img src={about} className="rounded-3xl w-full lg:w-1/2 lg:-rotate-2" alt="About us"/>
      <div className="lg:w-1/2">
        <h2 className="text-4xl tracking-tight lg:text-6xl">{ABOUT.header}</h2>
        <div className="my-4 h-2 w-24 bg-rose-300"></div>
        <p className="text-lg leading-relaxed text-neutral-300 lg:text-xl">{ABOUT.content}</p>
      </div>
    </div>
  </section>
)

export default About