import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <section className="navbar container">
        <div>
          <h1 className="navbar-logo">Wolder</h1>
        </div>
        <div className="nav">
          <nav >
            <ul className="main-nav">
              <li className="nav-li">
                <NavLink to={"/"} className={`nav-links`}>Home</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to={"/country"} className={`nav-links`}>Country</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to={"/about"} className={`nav-links`}>About</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to={"/contact"} className={`nav-links`}>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};
