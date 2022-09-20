import React, { useState } from "react";
import styles from "./k9.module.css";
import audio from "../../assets/sounds/yes.mpeg";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";
const K9 = () => {
  const [src, setSrc] = useState("images/k9-dog.png");
  const [isSound, setIsSound] = useState(false);
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
        setIsSound(true);
        new Audio(audio).play();
        setTimeout(() => {
          setIsSound(false);
        }, 2000);
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
      <h2
        style={{
          textAlign: "right",
          position: "relative",
          top: "40px",
          color: "white",
        }}
      >
        {isSound && <BsFillVolumeUpFill />}
        {!isSound && <BsFillVolumeMuteFill />}
      </h2>
      <img src={src} alt="doge" className={styles.pageIcon} />
    </div>
  );
};

export default K9;
