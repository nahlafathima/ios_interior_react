import React from 'react'
import Banner from '../components/Banner'
import Choose from '../components/Choose'
import Service from '../components/Service'
import TeamSection from '../components/TeamSection'
import Clients from '../components/Clients'
import Card from '../components/Card'

const About = () => {
  return (
    <div>
      <Banner/>
      <Service/>
      <Choose/>
      <TeamSection/>
      <Clients/>
      <Card/>
    </div>
  )
}

export default About
