import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div>
        <section>
          <h1>Wolder</h1>
        </section>
        <section>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/country"}>Country</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
};
