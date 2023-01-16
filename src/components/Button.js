import React from 'react'
import '../style/Button.css'
import PropTypes from 'prop-types'

function Button({ btnList }) {
  return btnList.map((btn) => {
    return <button key={btn.name}>{btn.name}</button>
  })
}

Button.propTypes = {
  btnList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
}

export default Button
