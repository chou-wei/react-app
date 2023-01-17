import './Home.scss'
import Card from '../Card/Card'
import React from 'react'

function Home() {
  return (
    <div className="home">
      <Card />
      <div className="left-floor"></div>
      <div className="right-floor"></div>
    </div>
  )
}

export default Home
