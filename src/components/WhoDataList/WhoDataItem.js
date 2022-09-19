import React from "react";
import styles from "./WhoDataItem.module.css";
const WhoDataItem = ({ item }) => {
  const itemClicked = () => {
    console.log("clicked Item");
  };
  return (
    <button type="button" onClick={itemClicked} className={styles.btn}>
      {item.name}
    </button>
  );
};

export default WhoDataItem;
