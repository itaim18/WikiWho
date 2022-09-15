import React from "react";
import styles from "./Intro.module.css";
const Intro = (props) => {
  return (
    <>
      <img
        src="images/the-doctor.png"
        alt="the doctor"
        className={styles.sideImage}
      />
      <div className={styles.box}>{props.children}</div>
    </>
  );
};

export default Intro;
