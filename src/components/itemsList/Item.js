import React, { useState } from "react";
import styles from "./item.module.css";
import { FaPlay } from "react-icons/fa";
import { HiSortDescending } from "react-icons/hi";
const Item = ({ hoverWidth, itemData, itemSize, itemWidth }) => {
  const [showDesc, setShowDesc] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <li style={itemWidth} key={itemData.id} className={styles.item}>
        <div style={itemWidth} className={styles.itemImg}>
          <img style={itemSize} src={itemData.image.mediumUrl} alt="img" />
          <div style={hoverWidth} className={styles.hoverCard}>
            <FaPlay
              className={styles.playIcon}
              onClick={() => setShowVideo((prevState) => !prevState)}
            />
            <div>
              {itemData.airDate ? (
                <p>{itemData.airDate}</p>
              ) : (
                <p>{itemData.dateAdded.slice(0, 10)}</p>
              )}

              <span onClick={() => setShowDesc((prevState) => !prevState)}>
                <span style={{ cursor: "pointer" }}> Desc: </span>{" "}
                <HiSortDescending className={styles.icon} />
              </span>
            </div>
          </div>
        </div>
        <h3 style={itemWidth}>{itemData.name}</h3>
      </li>
      {showDesc && (
        <section
          className={styles.info}
          onClick={() => setShowDesc((prevState) => !prevState)}
        >
          <div className={styles.card}>
            <h4>{itemData.deck}</h4>
            <div
              id="info-injected"
              dangerouslySetInnerHTML={{ __html: itemData.description }}
            ></div>
          </div>
        </section>
      )}
      {showVideo && (
        <section
          className={styles.info}
          onClick={() => setShowVideo((prevState) => !prevState)}
        >
          <iframe
            title="doctor"
            style={{ position: "relative", top: "160px" }}
            src="https://www.youtube-nocookie.com/embed/wXrqtC81ztA"
            height="562px"
            width="1024px"
            allowFullScreen
          ></iframe>
        </section>
      )}
    </>
  );
};

export default Item;
