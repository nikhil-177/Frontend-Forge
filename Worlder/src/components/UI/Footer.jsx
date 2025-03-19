import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";

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
            <li>
              <a
                href="https://www.instagram.com/nikhilpatel7360/"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.facebook.com/profile.php?id=100036064223556"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="footer-copyright container">
        <p>&copy; 2025 Explore Nations. All rights reserved.</p>
      </div>
    </footer>
  );
};
