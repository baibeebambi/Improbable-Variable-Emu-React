import React from 'react'

import PropTypes from 'prop-types'

import './visit-store.css'

const VisitStore = (props) => {
  return (
    <div className="visit-store-container">
      <a
        href="https://shop.morrisdesigns.art"
        target="_blank"
        rel="noreferrer noopener"
        className="visit-store-visit-store button"
      >
        {props.Visit_Store}
      </a>
    </div>
  )
}

VisitStore.defaultProps = {
  Visit_Store: 'VISIT STORE',
}

VisitStore.propTypes = {
  Visit_Store: PropTypes.string,
}

export default VisitStore
