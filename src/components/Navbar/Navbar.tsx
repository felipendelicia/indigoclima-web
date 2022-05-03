import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import products from "../Products/products.json"

import "./Navbar.css"

const Navbar = () => {

  const handleScroll = () => {
    let navContainer = document.getElementsByClassName("navbar-container")
    let textScrolled = document.getElementsByClassName("texttoscroll")

    if(window.location.pathname==="/"){
      if(window.pageYOffset>90){
        navContainer[0].classList.add("scrolled")
        for(let i=0;i<textScrolled.length;i++){
          textScrolled[i].classList.add("blackletter")
        }

      } else if(window.pageYOffset<90) {
        navContainer[0].classList.remove("scrolled")
        for(let i=0;i<textScrolled.length;i++){
          textScrolled[i].classList.remove("blackletter")
        }
      }
    } else {
      navContainer[0].classList.add("scrolled")
      for(let i=0;i<textScrolled.length;i++){
        textScrolled[i].classList.add("blackletter")
      }
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  })

  useEffect(handleScroll)

  return (
    <div className="navbar-container">

      <Link to="/" onClick={handleScroll}>
      <div className="navbar-brand-container"> 
        
          <div className="brand-img-container">
            <img src="./assets/img/logoMain.png" alt="IndigoClima logo" className="brand-img"/>
          </div>
          <div className="comfortaafont brand-name texttoscroll">Indigo Clima</div>
      </div>
      </Link>

      <div className="navbar-categories-container">
        <ul className="list-categories comfortaafont">
          <li className="list-categorie texttoscroll" onClick={handleScroll}><Link to="/">Inicio</Link></li>
          {
            products.map((element, index)=>{
              return <li className="list-categorie texttoscroll" key={index} onClick={handleScroll}>
                <Link to={element.url}>{element.name}</Link>
                </li>
            })
          }
        </ul>
      </div>

    </div>
  )
}

export default Navbar