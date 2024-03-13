import React from 'react'
import MiniHeader from '../components/MiniHeader'
import ServicesList from '../components/ServicesList'
import Contact from '../components/Contact'
import Connection from '../components/Connection'

const ServicesPage = () => {
  return (
    <div>
        <MiniHeader />
        <ServicesList />
        <Connection />
        <Contact />
    </div>
  )
}

export default ServicesPage