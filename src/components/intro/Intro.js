import React from "react";
import styles from "./Intro.module.css";
const Intro = (props) => {
  return (
    <>
      <div className={styles.box}>
        <img
          src="images/the-doctor.png"
          alt="the doctor"
          className={styles.sideImage}
        />
        {props.children}
      </div>
    </>
  );
};

export default Intro;
