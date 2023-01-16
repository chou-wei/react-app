import './style/all.scss'
import Footer from './containers/Footer'
import React from 'react'
// import Nav from './components/Nav'
import { Route, Link, withRouter } from 'react-router-dom'
import { component } from '../src/containers/allContainers'

function App() {
  const { Contact, Home, Resume, Projects } = component

  function refresh() {
    window.location.reload()
    console.log(`refresh!!`)
  }

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
          <div className="about-me" key="Home" onClick={refresh}>
            <Link to="/home">ABOUT ME</Link>
          </div>
          <div className="resume" key="Resume" onClick={refresh}>
            <Link to="/resume">RESUME</Link>
          </div>
          <div className="projects" key="Projects" onClick={refresh}>
            <Link to="/projects">PROJECTS</Link>
          </div>
          <div className="contact" key="Contact" onClick={refresh}>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
      <div className="content">
        <Route exact path="/home" component={() => <Home />} />
        <Route exact path="/contact" component={() => <Contact />} />
        <Route exact path="/projects" component={() => <Projects />} />
        <Route exact path="/resume" component={() => <Resume />} />
      </div>
      <Footer />
    </div>
  )
}

export default withRouter(App)
