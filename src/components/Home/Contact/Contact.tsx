import React from 'react'

import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-field">
        <img src="./assets/img/pinIcon.png" className="contact-icon" alt="icon"/>
        <p className="contact-text comfortaafont">
          <a href="https://goo.gl/maps/jpSm9pqLwZe2RDtD7" target="_blank" rel="noreferrer">
            Libertad 434 1S, CABA, Argentina
          </a>
        </p>
      </div>
      <div className="contact-field">
        <img src="./assets/img/emailIcon.png"  className="contact-icon" alt="icon"/>
        <p className="contact-text comfortaafont">
          <a href="mailto:admin@indigoclima.com.ar">
            admin@indigoclima.com.ar
          </a>
        </p>
      </div>
      <div className="contact-field">
        <img src="./assets/img/whatsappIcon.png"  className="contact-icon" alt="icon"/>
        <p className="contact-text comfortaafont">
          <a href="https://wa.me/+5491151395768" target="_blank" rel="noreferrer">
            +54 9 11 5139-5768
          </a>
        </p>
      </div>
      <div className="contact-field">
        <img src="./assets/img/instagramIcon.png"  className="contact-icon" alt="icon"/>
        <p className="contact-text comfortaafont">
          <a href="https://www.instagram.com/indigoclima/" target="_blank" rel="noreferrer">
            @indigoclima
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact