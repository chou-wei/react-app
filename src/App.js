import React from 'react'
import { Route, useLocation, Switch } from 'react-router-dom'
import { containers } from '../src/containers/allContainers'
import { components } from '../src/components/allComponents'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App() {
  const { Contact, Home, Resume, Projects, Footer } = containers
  const { Nav } = components
  const location = useLocation()

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
      <div className="content fade-in-image">
        <TransitionGroup className="trans-part">
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
          >
            <Switch location={location}>
              <Route exact path="/home" component={() => <Home />} />
              <Route exact path="/contact" component={() => <Contact />} />
              <Route exact path="/projects" component={() => <Projects />} />
              <Route exact path="/resume" component={() => <Resume />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  )
}

export default App
