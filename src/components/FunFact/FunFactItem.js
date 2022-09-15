import React from "react";
import styles from "./FunFactItem.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const FunFactItem = (props) => {
  const { fact } = props;
  return (
    <div className={styles.fact}>
      <h1>FUN FACT:</h1>
      <h2>{fact.title}</h2>
      <table>
        <tbody>
          <tr>
            <td>
              {fact.text ? (
                <p className={styles.factText}>
                  <FaQuoteLeft />
                  {fact.text}
                  <FaQuoteRight />
                </p>
              ) : null}
            </td>
            <td>
              <div>
                <img src={fact.image} alt="tardis" className={styles.image} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FunFactItem;
