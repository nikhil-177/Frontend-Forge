import { useState } from "react";
import {NavLink} from "react-router-dom"; 
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <section className="navbar container">
        <div>
          <h1 className="navbar-logo">Worlder</h1>
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ImCross /> : <GiHamburgerMenu />}
        </button>

          <nav className={`${isOpen ? "nav-small-screen" : "nav-big-screen"}`}>
            <ul className="nav-ul">
              <li className="nav-li">
                <NavLink to={"/"} >Home</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to={"/country"} >Country</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to={"/about"} >About</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to={"/contact"} >Contact</NavLink>
              </li>
            </ul>
          </nav>
      </section>
    </header>
  );
};
