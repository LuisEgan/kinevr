import React from 'react'

import iso from '../assets/SVG/ISO.svg'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <img src={iso} alt="iso" />
          <h1>
            <strong>KINEVR</strong>
          </h1>
          <p>Slogan</p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Conoce más
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
