import React, { useState } from "react";
import styles from "./NavBar.module.css";
import RouteMenu from "../routeMenu/RouteMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const pickedOptionHandler = () => {
  //   setShowMenu(true);
  // };
  const showMenuHandler = () => {
    setShowMenu((prevState) => {
      return !prevState;
    });
  };
  const backHome = () => {
    setShowMenu(false);
  };

  return (
    <div className={styles.stick}>
      <header className={styles.header}>
        <Link onClick={backHome} to="/home" style={{ textDecoration: "none" }}>
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
          <RouteMenu className={styles.menu} onChooseOption={backHome} />
        </nav>
      )}
    </div>
  );
};

export default NavBar;
