import React from "react";
import styles from "./NavBar.module.css";
import DropdownHome from "../UI/DropdownHome";
const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Wiki<span className={styles.who}>WHO</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <a>Merch</a>
          </li>
          <li>
            <a>Hubs</a>
          </li>
          <li>
            <a>Episodes</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
        <div className={styles.hamburger}>
          <DropdownHome />
        </div>
        {/* <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span> */}
      </nav>
    </header>
  );
};

export default NavBar;
