import './TitleTheme.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'

function TitleTheme() {
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    setMessage(event.target.value)

    console.log('value is:', event.target.value)
  }
  return (
    <div className="title-main">
      <div className="title-item">
        EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.
      </div>
      <div className="title-item large">Train of Thought</div>
      <div className="nav-list">
        <div className="nav empty"></div>
        <div className="nav">
          <p>Home</p>
        </div>
        <div className="nav">
          <p>About</p>
        </div>
        <div className="nav">
          <p>My Blog</p>
        </div>
        <div className="nav">
          <p>Contact</p>
        </div>
        <div className="nav">
          <div className="search-bar">
            <input
              placeholder="Search..."
              type="text"
              id="message"
              name="message"
              onChange={handleChange}
              value={message}
            />
            <AiOutlineSearch />
          </div>
        </div>
        <div className="nav last"></div>
      </div>
    </div>
  )
}

export default TitleTheme
