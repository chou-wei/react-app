import './style/all.scss'
import Nav from './components/Nav'
import Footer from './containers/Footer'

import Home from '../src/containers/Home'
import Contact from '../src/containers/Contact'
import Projects from '../src/containers/Projects'
import Resume from '../src/containers/Resume'

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  const navList = [
    { class: 'about-me', label: 'ABOUT ME', page: 'Home' },
    { class: 'resume', label: 'RESUME', page: 'Resume' },
    { class: 'projects', label: 'PROJECTS', page: 'Projects' },
    { class: 'contact', label: 'CONTACT', page: 'Contact' },
  ]

  return (
    <div className="app">
      <div className="header">
        <div className="left-logo">
          <div className="dot" />
          <div className="website-name">
            Zhou Wei<div className="small-font"> / PROJECT MANAGER </div>
          </div>
        </div>
        <div className="right-nav">
          <Nav navList={navList} />
        </div>
      </div>
      <div className="content">
        <BrowserRouter>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  )
}

export default App
