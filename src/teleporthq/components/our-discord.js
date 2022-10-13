import React from 'react'

import PropTypes from 'prop-types'

import './our-discord.css'

const OurDiscord = (props) => {
  return (
    <a
      href="https://discord.gg/mTXAC6gmvY"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="our-discord-container">
        <button className="our-discord-our-discord button">
          <svg viewBox="0 0 1024 1024" className="our-discord-icon">
            <path d="M738 470h72q0 108-75 189t-181 97v140h-84v-140q-106-16-181-97t-75-189h72q0 94 67 155t159 61 159-61 67-155zM512 598q-52 0-90-38t-38-90v-256q0-52 38-90t90-38 90 38 38 90v256q0 52-38 90t-90 38z"></path>
          </svg>
          <span className="our-discord-text">{props.text}</span>
        </button>
      </div>
    </a>
  )
}

OurDiscord.defaultProps = {
  text: 'OUR DISCORD',
}

OurDiscord.propTypes = {
  text: PropTypes.string,
}

export default OurDiscord
