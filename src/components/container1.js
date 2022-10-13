import React from 'react'

import PropTypes from 'prop-types'

import './container1.css'

const Container1 = (props) => {
  return (
    <div className="container1-container">
      <svg viewBox="0 0 1024 1024" className="container1-icon">
        <path d="M704 64l-320 320h-192l-192 256c0 0 203.416-56.652 322.066-30.084l-322.066 414.084 421.902-328.144c58.838 134.654-37.902 328.144-37.902 328.144l256-192v-192l320-320 64-320-320 64z"></path>
      </svg>
      <h1 className="container1-text">{props.heading}</h1>
      <span className="container1-text1">{props.text}</span>
    </div>
  )
}

Container1.defaultProps = {
  heading: 'Test Title',
  text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
}

Container1.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Container1
