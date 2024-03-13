import React from 'react'
import MiniHeader from '../components/MiniHeader'
import AboutSec from '../components/AboutSec'
import FeaturesAbtSec from '../components/FeaturesAbtSec'
import Skills from '../components/Skills'
import Stats from '../components/Stats'

const About = () => {
  return (
    <div>
        <MiniHeader />
        <AboutSec />
        <FeaturesAbtSec />
        <Skills />
        <Stats />
    </div>
  )
}

export default About