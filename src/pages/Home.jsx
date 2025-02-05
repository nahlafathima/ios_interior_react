import React from 'react'
import Hero from '../components/Hero'
import Browse from '../components/Browse'
import Products from '../components/Products'
import ImageGrid from '../components/ImageGrid'
import Card from '../components/Card'
import PageLayout from '../components/PageLayout'
import SaleCard from '../components/SaleCard'
import Customer from '../components/Customer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Customer/>
        <Browse/>
        <SaleCard/>
        <PageLayout/>
        <Products/>
        <ImageGrid/>
        <Card/>
    </div>
  )
}

export default Home
