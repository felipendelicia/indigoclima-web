import React from 'react'

import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-field">
        <img src="./assets/img/pinIcon.png" className="contact-icon" alt="icon"/>
        <p className="contact-text comfortaafont">Libertad 434 1S, CABA, Argentina</p>
      </div>
      <div className="contact-field">
        <img src="./assets/img/emailIcon.png"  className="contact-icon" alt="icon"/>
        <p className="contact-text comfortaafont">admin@indigoclima.com.ar</p>
      </div>
      <div className="contact-field">
        <img src="./assets/img/whatsappIcon.png"  className="contact-icon" alt="icon"/>
        <p className="contact-text comfortaafont">+54 9 11 5139-5768</p>
      </div>
      <div className="contact-field">
        <img src="./assets/img/instagramIcon.png"  className="contact-icon" alt="icon"/>
        <p className="contact-text comfortaafont">@indigoclima</p>
      </div>
    </div>
  )
}

export default Contact