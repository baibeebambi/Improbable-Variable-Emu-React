import React from 'react'

import PropTypes from 'prop-types'

import './login1.css'

const Login1 = (props) => {
  return (
    <div className="login1-container">
      <button className="login1-login button">
        <span className="login1-text">{props.Text}</span>
      </button>
    </div>
  )
}

Login1.defaultProps = {
  Text: 'STORE',
}

Login1.propTypes = {
  Text: PropTypes.string,
}

export default Login1
