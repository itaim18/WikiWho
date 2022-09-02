import React from "react";
import styles from "./LoadingIcon.module.css";

const LoadingIcon = () => {
  return (
    <div className="centered">
      <img
        src="images/tardisLight.gif"
        alt="loading..."
        className={styles.gif}
      />
    </div>
  );
};

export default LoadingIcon;
