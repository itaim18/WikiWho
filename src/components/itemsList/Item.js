import React, { useState } from "react";
import styles from "./item.module.css";
import { FaPlay } from "react-icons/fa";
import { HiSortDescending } from "react-icons/hi";
import { MdCloseFullscreen } from "react-icons/md";
const Item = ({ hoverWidth, itemData, itemSize, itemWidth }) => {
  const [showDesc, setShowDesc] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <li style={itemWidth} key={itemData.id} className={styles.item}>
        <div style={itemWidth} className={styles.itemImg}>
          <img style={itemSize} src={itemData.image.medium_url} alt="img" />
          <div style={hoverWidth} className={styles.hoverCard}>
            <FaPlay
              className={styles.playIcon}
              onClick={() => setShowVideo((prevState) => !prevState)}
            />
            <div>
              {itemData.cover_date && <p>{itemData.cover_date}</p>}
              {itemData.air_date && <p>{itemData.air_date}</p>}

              <span onClick={() => setShowDesc((prevState) => !prevState)}>
                <span> Desc: </span>{" "}
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
          {/* <MdCloseFullscreen
            style={{
              color: "white",
              position: "absolute",
              top: "50px",
              right: "200px",
              fontSize: "32px",
            }}
          /> */}
          <iframe
            title="doctor"
            style={{ position: "relative", top: "160px" }}
            src="https://www.youtube-nocookie.com/embed/wXrqtC81ztA"
            height="562px"
            width="1024px"
            // scrolling="no"
            // frameBorder=""
            allowFullScreen
          ></iframe>
        </section>
      )}
    </>
  );
};

export default Item;
