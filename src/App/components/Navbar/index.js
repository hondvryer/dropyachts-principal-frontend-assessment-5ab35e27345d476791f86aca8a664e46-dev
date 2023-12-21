import React from "react"
import { IoMdClose } from "react-icons/io"
import { MENU_ITEMS } from "../../../utils/constants"
import Dropyacht from "../../../assets/images/dropyacht.svg"
import "./styles.css"

const Navbar = ({ isOpen, handleClose }) => {
  return (
    <div className={`slide-in-menu ${isOpen ? "show" : "hide"}`}>
      <div className="nav-header">
        <img
          src={Dropyacht}
          alt="DropYacht"
          className="brand-logo"
          loading="lazy"
        />
        <button className="close-button" onClick={handleClose}>
          <IoMdClose fontSize="2rem" />
        </button>
      </div>
      <div className="nav-body">
        {MENU_ITEMS?.map((mi) => (
          <h3 key={mi.title}>
            <a href={mi.url} target="_blank">
              {mi.title}
            </a>
          </h3>
        ))}
      </div>
    </div>
  )
}

export default Navbar
