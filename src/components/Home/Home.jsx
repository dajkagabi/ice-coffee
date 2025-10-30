import React from 'react'
import Hero from '../Hero/Hero'
import Why from '../Why/Why'
import Products from '../Products/Products'
import History from '../History/History'
import News from '../News/News'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Why/>
      <Products/>
      <History/>
      <News/>
    </div>
  )
}

export default Home