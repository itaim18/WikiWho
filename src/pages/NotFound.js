import React from "react";
import styles from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div
      style={{
        margin: "3rem 15%",
        textAlign: "center",
        color: "#72ffff",
        background: "#303040",
        width: "70%",
        borderRadius: "5%",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <h1 className="centered" style={{ paddingTop: "20px", fontSize: "60px" }}>
        404
      </h1>
      <img
        src="images/tardis.gif"
        alt="tardis"
        className={`centered ${styles.img}`}
      />
      <h3 className="centered">Page not found</h3>

      <h3 className="centered" style={{ paddingBottom: "20px" }}>
        <em style={{ marginRight: "15px" }}>TRANSFORM</em> your url to match one
        of the site pages
      </h3>
    </div>
  );
};

export default NotFound;
