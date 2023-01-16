import '../style/Nav.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Nav({ navList }) {
  return navList.map((nav) => {
    return (
      <div className={nav.class} key={nav.page}>
        <Link to={nav.page}> {nav.label}</Link>
      </div>
    )
  })
}

Nav.propTypes = {
  navList: PropTypes.arrayOf(
    PropTypes.shape({
      class: PropTypes.string,
      label: PropTypes.string,
      page: PropTypes.string,
    }),
  ),
}

export default Nav
