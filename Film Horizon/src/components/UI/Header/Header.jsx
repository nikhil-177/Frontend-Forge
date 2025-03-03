import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

export const Header = () => {
  const [menuBar, setMenuBar] = useState(false);

  function HandleMenuBar() {
    setMenuBar(!menuBar);
  }

  function closeSideBar() {
    setMenuBar(!menuBar);
  }

  return (
    <header className={styles.header}>
      <div className={styles.mainContainer}>
        <h1 className={styles.h1}>FILM HORIZON</h1>
        <div className={styles.container}>
          <div className={styles.toggleSwitchmode}></div>
          <button className={styles.menu} onClick={HandleMenuBar}>
            {" "}
            <GiHamburgerMenu />{" "}
          </button>
          <NavLink to={"/favourites"}>
            {" "}
            <img
              src="./public/images/heart.png"
              alt="heart"
              className={styles.img}
            />
          </NavLink>
        </div>
        <div className={menuBar ? styles.ulBlock : styles.ulNone}>
          <button className={styles.closeSideBar} onClick={closeSideBar}>
            {" "}
            <ImCross />{" "}
          </button>
          <nav className={styles.display}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <NavLink to={"./"} className={({ isActive }) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>


                  Home
                </NavLink>
              </li>
              <li className={styles.li}>
                <NavLink to={"/movies"} className={({ isActive }) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>


                  Movies
                </NavLink>
              </li>
              <li className={styles.li}>
                <NavLink to={"/tvshows"} className={({ isActive }) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>


                  TV Shows
                </NavLink>
              </li>
              <li className={styles.li}>
                <NavLink to={"/search"} className={({ isActive }) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>


                  Search
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.bigScreen}>
          <nav >
            <ul className={styles.bigScreenul}>
              <li className={styles.bigScreenli}>
                <NavLink to={"./"} className={({ isActive }) => isActive ? `${styles.bigScreenNavlink} ${styles.active}` : styles.bigScreenNavlink}>


                  Home
                </NavLink>
              </li>
              <li className={styles.bigScreenli}>
                <NavLink to={"/movies"} className={({ isActive }) => isActive ? `${styles.bigScreenNavlink} ${styles.active}` : styles.bigScreenNavlink}>


                  Movies
                </NavLink>
              </li>
              <li className={styles.bigScreenli}>
                <NavLink to={"/tvshows"} className={({ isActive }) => isActive ? `${styles.bigScreenNavlink} ${styles.active}` : styles.bigScreenNavlink}>


                  TV Shows
                </NavLink>
              </li>
              <li className={styles.bigScreenli}>
                <NavLink to={"/search"} className={({ isActive }) => isActive ? `${styles.bigScreenNavlink} ${styles.active}` : styles.bigScreenNavlink}>


                  Search
                </NavLink>
              </li>
              <li className={styles.bigScreenli}> <NavLink to={"/favourites"}>
            {" "}
            <img
              src="./public/images/heart.png"
              alt="heart"
              className={styles.bigScreenimg}
            />
          </NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
