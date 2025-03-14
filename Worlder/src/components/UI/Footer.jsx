import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <section className="container footer">
        <div>
          <h2 className="footer-heading">Explore Nations</h2>
          <p className="footer-p">
            Your gateway to learning about different countries, their cultures,
            and fascinating facts.
          </p>
        </div>

        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
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
        </div>

        <div>
          <h3 className="footer-heading">Follow Us</h3>
          <ul className="footer-social-links">
            <li>for instagram</li>
            <li> for facebook</li>
          </ul>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2025 Explore Nations. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};
