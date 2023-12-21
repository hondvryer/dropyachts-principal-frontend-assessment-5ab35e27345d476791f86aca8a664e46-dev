import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import Dropyacht from "../../../assets/images/dropyacht.svg"
import Navbar from "../Navbar"
import "./styles.css"

const BrandHeader = ({ dateComponent }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="header">
      <div className="header-actions">
        <button className="menu-button" onClick={() => setMenuOpen(true)}>
          <GiHamburgerMenu fontSize="2rem" />
        </button>
        <img
          src={Dropyacht}
          alt="DropYacht"
          className="brand-logo"
          loading="lazy"
        />
      </div>
      <div className="header-actions">
        <div className="header-actions">{dateComponent}</div>
        <a href="https://www.dropyacht.com/" target="_blank">
          <button className="demo-btn">Book a Demo</button>
        </a>
      </div>
      <Navbar isOpen={menuOpen} handleClose={() => setMenuOpen(false)} />
    </div>
  )
}

export default BrandHeader
