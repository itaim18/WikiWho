import React from "react";
import styles from "./MerchItem.module.css";
const MerchItem = ({ data }) => {
  return (
    <li className={styles.card}>
      <img src={data.image} alt={data.asin} />
      <h3>{data.title}</h3>
      <p>price: {data.price?.name}</p>
      <a href={data.link}>to amazon</a>
    </li>
  );
};

export default MerchItem;
