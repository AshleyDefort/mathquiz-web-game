import "../styles/navbar.css";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const closeNav = () => {
    setIsNavExpanded(false);
  };

  return (
    <header>
      <h3>AprendeMat</h3>
      <nav className={isNavExpanded ? "nav expanded" : "nav"}>
        <a className="item" href="#" onClick={closeNav}>
          Inicio
        </a>
        <a className="item" href="#skills" onClick={closeNav}>
          Temas
        </a>
        <a className="item" href="#projects" onClick={closeNav}>
          Recursos
        </a>
        <a className="item" href="https://github.com/AshleyDefort/mathquiz-web-game.git" onClick={closeNav} target="_blank">
          Contribuir
          <MdArrowOutward />
        </a>
        <button
          className="nav-btn nav-close-btn"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;