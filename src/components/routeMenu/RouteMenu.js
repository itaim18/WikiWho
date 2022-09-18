import React from "react";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
import styles from "./RouteMenu.module.css";
const RouteMenu = (props) => {
  return (
    <>
      <ul className={props.className}>
        <li>
          <Link to="/merch" onClick={props.onChooseOption}>
            Merch
          </Link>
        </li>

        <li>
          <Link onClick={props.onChooseOption}>
            Hubs
            <BsFillCaretDownFill className={styles.icon} />
            <div className={styles.arrow}></div>
            <ul className={styles.hubsMenu}>
              <li>
                <Link to="/fun-fact">Fun Fact</Link>
              </li>
              <li>Comics</li>
              <li>Comic Relief</li>
            </ul>
          </Link>

          <div className={styles.subMenu}>
            <ul>
              <li>
                <Link to="/fun-fact" onClick={props.onChooseOption}>
                  Fun Fact
                </Link>
              </li>
              <li>
                <Link onClick={props.onChooseOption}>Comics</Link>
              </li>
              <li>
                <Link onClick={props.onChooseOption}>Comic Relief</Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link onClick={props.onChooseOption}>
            Episodes
            <BsFillCaretDownFill className={styles.icon} />
            <div className={styles.arrow}></div>
            <ul className={styles.hubsMenu}>
              <li>
                <Link to="/classic">Classic Era</Link>
              </li>
              <li>
                <Link to="/modern">Modern Era</Link>
              </li>
              <li>
                <Link to="/specials">Specials and Movies</Link>
              </li>
            </ul>
          </Link>

          <div className={styles.subMenu}>
            <ul>
              <li>
                <Link to="/classic" onClick={props.onChooseOption}>
                  Classic Era
                </Link>
              </li>
              <li>
                <Link to="/modern" onClick={props.onChooseOption}>
                  Modern Era
                </Link>
              </li>
              <li>
                <Link to="/specials" onClick={props.onChooseOption}>
                  Specials and Movies
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/contact" onClick={props.onChooseOption}>
            CONTACT
          </Link>
        </li>
      </ul>
    </>
  );
};

export default RouteMenu;
