import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Transactions from './components/Transactions'
import Service from './components/Service'
import WorkProcess from './components/WorkProcess'
import Reviews from './components/Reviews'
import FAQs from './components/FAQs'
import Newsletter from './components/Newsletter'

const Home = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Transactions />
        <Service />
        <WorkProcess />
        <Reviews />
        <FAQs />
        <Newsletter />
    </div>
  )
}

export default Home