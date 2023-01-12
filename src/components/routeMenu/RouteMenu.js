import React from "react";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
import styles from "./RouteMenu.module.css";
const RouteMenu = ({ className, onChooseOption }) => {
  return (
    <>
      <ul className={className}>
        <li>
          <Link to="/merch" onClick={onChooseOption}>
            Merch
          </Link>
        </li>

        <li>
          <span className={styles.opener}>
            Hubs
            <BsFillCaretDownFill className={styles.icon} />
            <div className={styles.arrow}></div>
            <ul className={styles.hubsMenu}>
              <li>
                <Link
                  to="/fun-fact"
                  onClick={onChooseOption}
                  className={styles.funFact}
                >
                  Fun Fact
                </Link>
              </li>
              <li>
                <Link to="/comics" onClick={onChooseOption}>
                  Comics
                </Link>
              </li>
              <li>
                <Link to="/issues" onClick={onChooseOption}>
                  Issues
                </Link>
              </li>
            </ul>
          </span>

          <div className={styles.subMenu}>
            <ul>
              <li>
                <Link
                  to="/fun-fact"
                  onClick={onChooseOption}
                  className={styles.funFact}
                >
                  Fun Fact
                </Link>
              </li>
              <li>
                <Link to="/comics" onClick={onChooseOption}>
                  Comics
                </Link>
              </li>
              <li>
                <Link to="/issues" onClick={onChooseOption}>
                  Issues
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <span className={styles.opener}>
            Episodes
            <BsFillCaretDownFill className={styles.icon} />
            <div className={styles.arrow}></div>
            <ul className={styles.hubsMenu}>
              <li>
                <Link to="/classic" onClick={onChooseOption}>
                  Classic Era
                </Link>
              </li>
              <li>
                <Link to="/modern" onClick={onChooseOption}>
                  Modern Era
                </Link>
              </li>
              <li>
                <Link to="/specials" onClick={onChooseOption}>
                  Specials
                </Link>
              </li>
            </ul>
          </span>

          <div className={styles.subMenu}>
            <ul>
              <li>
                <Link to="/classic" onClick={onChooseOption}>
                  Classic Era
                </Link>
              </li>
              <li>
                <Link to="/modern" onClick={onChooseOption}>
                  Modern Era
                </Link>
              </li>
              <li>
                <Link to="/specials" onClick={onChooseOption}>
                  Specials
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link to="/contact" onClick={onChooseOption}>
            CONTACT
          </Link>
        </li>
      </ul>
    </>
  );
};

export default RouteMenu;
