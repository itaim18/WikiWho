import React, { useState } from "react";
import styles from "./NavBar.module.css";
import RouteMenu from "../routeMenu/RouteMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pickedOptionHandler = () => {
    setShowMenu(false);
  };
  const showMenuHandler = () => {
    setShowMenu((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={styles.stick}>
      <header className={styles.header}>
        <Link
          onClick={pickedOptionHandler}
          to="/home"
          style={{ textDecoration: "none" }}
        >
          <div className={styles.logo}>
            Wiki<span className={styles.who}>WHO</span>
          </div>
        </Link>
        <nav className={styles.nav}>
          <RouteMenu className={styles.list} />
          <div
            onClick={showMenuHandler}
            className={`${styles.hamburger} ${showMenu ? styles.open : null}`}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </nav>
      </header>

      {showMenu && (
        <nav className={styles.menuNav}>
          <RouteMenu
            className={styles.menu}
            onChooseOption={pickedOptionHandler}
          />
        </nav>
      )}
    </div>
  );
};

export default NavBar;
