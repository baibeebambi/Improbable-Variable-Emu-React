import React from 'react'

import PropTypes from 'prop-types'

import './instagram.css'

const Instagram = (props) => {
  return (
    <div className="instagram-container">
      <a
        href="https://www.instagram.com/morris.designs2022/"
        target="_blank"
        rel="noreferrer noopener"
        className="instagram-instagram button"
      >
        {props.Instagram}
      </a>
    </div>
  )
}

Instagram.defaultProps = {
  Instagram: 'INSTAGRAM',
}

Instagram.propTypes = {
  Instagram: PropTypes.string,
}

export default Instagram
