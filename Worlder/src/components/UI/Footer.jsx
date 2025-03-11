import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <section>
        <h2>Explore Nations</h2>
        <p>
          Your gateway to learning about different countries, their cultures,
          and fascinating facts.
        </p>
      </section>

      <section>
        <h3>Quick Links</h3>
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
      </section>

      <section>
        <h3>Follow Us</h3>
        <ul className="social-links">
          <li>
            <a
              href="https://www.instagram.com/nikhilpatel7360/"
              target="_blank"
            >
              for instagram
            </a>
          </li>
          <li> for facebook</li>
        </ul>
      </section>

      <section>
        <p>&copy; 2025 Explore Nations. All rights reserved.</p>
      </section>
    </footer>
  );
};
