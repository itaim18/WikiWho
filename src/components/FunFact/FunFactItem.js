import React from "react";
import styles from "./FunFactItem.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const FunFactItem = (props) => {
  const { fact } = props;
  return (
    <div className={styles.fact}>
      <div>
        <h1>FUN FACT:</h1>
        <h2>{fact.title}</h2>
        {fact.text ? (
          <p className={styles.factText}>
            <FaQuoteLeft />
            {fact.text}
            <FaQuoteRight />
          </p>
        ) : null}
      </div>
      <img src={fact.image} alt="tardis" className={styles.image} />
    </div>
  );
};

export default FunFactItem;
