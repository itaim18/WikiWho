import React from "react";
import styles from "./WhoDataList.module.css";
const WhoDataList = () => {
  return (
    <ul className={styles.itemsList}>
      <li>
        <button>d1</button>
      </li>
      <li>
        <button>d2</button>
      </li>
      <li>
        <button>d3</button>
      </li>
    </ul>
  );
};

export default WhoDataList;
