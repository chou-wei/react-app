import './Card.scss'
import React from 'react'
import Button from '../../components/Button/Button'

function Card() {
  const btnList = [{ name: 'RESUME' }, { name: 'PROJECTS' }]
  return (
    <div className="background">
      <div className="card-main">
        <div className="upper">
          <div className="image"></div>
          <div className="name">Zhou Wei</div>
          <div className="line" />
          <div className="title">PROJECT MANAGER</div>
        </div>
        <div className="downer"></div>
      </div>
      <div className="article">
        <div className="title">Hello</div>
        <div className="second-title">Here's who I am & what I do</div>
        <div className="btn-group">
          <Button btnList={btnList} />
        </div>
        <div className="text">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
          <p>
            I’m a great place for you to tell a story and let your users know a
            little more about you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
