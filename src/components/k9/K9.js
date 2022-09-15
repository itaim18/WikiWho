import React, { useState } from "react";
import styles from "./k9.module.css";
import audio from "../../assets/sounds/yes.mpeg";
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
  const linkToVid = (event) => {
    switch (event.detail) {
      case 1: {
        new Audio(audio).play();
        break;
      }

      case 2: {
        window.open(
          "https://www.youtube.com/watch?v=HWZoNe-oKJw&t=10s&ab_channel=PipMadeley",
          "_blank"
        );
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div
      className={styles.iconBox}
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
      onClick={linkToVid}
    >
      <img src={src} alt="doge" className={styles.pageIcon} />
    </div>
  );
};

export default K9;
