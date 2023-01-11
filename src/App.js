import './style/all.css'
import Card from '../src/components/Card'

function App() {
  // const innerWidth = window.innerWidth
  // const innerHeight = window.innerHeight
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
          <div className="about-me">ABOUT ME</div>
          <div className="resume">RESUME</div>
          <div className="projects">PROJECTS</div>
          <div className="contact">CONTACT</div>
        </div>
      </div>
      <div className="content">
        <div className="left-floor">
          <Card />
        </div>
        <div className="right-floor">
          <div className="title"></div>
          <div className="second-title"></div>
          <div className="btn-group"></div>
          <div className="article"></div>
        </div>
      </div>
      <div className="footer">
        <div className="left-footer">
          <div className="upper">© 2023 by Zhou Wei.</div>
          <div className="downer">Powered and secured by Wix</div>
        </div>
        <div className="right-footer">
          <div className="call">
            <div className="label"> Call</div>
            <div className="text">123-456-7890</div>
          </div>
          <div className="write">
            <div className="label">Write</div>
            <div className="text">info@mysite.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
