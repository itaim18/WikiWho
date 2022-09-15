import React, { useState } from "react";
import styles from "./WhoDataItem.module.css";
const WhoDataItem = ({ item }) => {
  const [hovers, setHovers] = useState(false);
  const handleMouseEnter = () => {
    setHovers(true);
  };
  const handleMouseLeave = () => {
    setHovers(false);
  };
  const style = {
    boxShadow: hovers
      ? "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset"
      : "0 25px 20px #00000065",
  };
  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.item}
      key={item.id}
    >
      <button style={style} className={styles.btn} key={item.id}>
        {item.name}
      </button>
    </li>
  );
};

export default WhoDataItem;
