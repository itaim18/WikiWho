import React from "react";
import styles from "./Intro.module.css";
const Intro = (props) => {
  return (
    <div className={styles.box}>
      <h1 className={styles.text}>{props.children}</h1>
    </div>
  );
};

export default Intro;
