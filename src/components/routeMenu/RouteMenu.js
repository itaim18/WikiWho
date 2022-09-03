import React from "react";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
import styles from "./RouteMenu.module.css";
const RouteMenu = (props) => {
  return (
    <ul className={props.className}>
      <li>
        <Link>
          Merch
          <BsFillCaretDownFill className={styles.icon} />
        </Link>
      </li>

      <li>
        <Link>
          Hubs
          <BsFillCaretDownFill className={styles.icon} />
        </Link>
      </li>

      <li>
        <Link>
          Episodes
          <BsFillCaretDownFill className={styles.icon} />
        </Link>
      </li>

      <li>
        <Link to="/contact" onClick={props.onChooseOption}>
          CONTACT
        </Link>
      </li>
    </ul>
  );
};

export default RouteMenu;
