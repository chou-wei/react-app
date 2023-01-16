import React from 'react'
import Contact from '../src/containers/Contact'
import Home from '../src/containers/Home'
import Projects from '../src/containers/Projects'
import Resume from '../src/containers/Resume'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
  {
    path: '/Projects',
    element: <Projects />,
  },
  {
    path: '/Resume',
    element: <Resume />,
  },
])

export default router
