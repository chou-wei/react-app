import '../style/Home.css'
import Card from './Card'
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
