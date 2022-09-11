import React, { useState } from "react";
import styles from "./k9.module.css";
const K9 = () => {
  const [src, setSrc] = useState("images/k9-dog.png");

  const startAnimation = () => {
    setTimeout(() => {
      setSrc("images/k9-runs.png");
    }, 300);
  };
  const stopAnimation = () => {
    setTimeout(() => {
      setSrc("images/k9-dog.png");
    }, 150);
  };
  return (
    <div
      className={styles.iconBox}
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
    >
      <img src={src} alt="doge" className={styles.pageIcon} />
    </div>
  );
};

export default K9;
