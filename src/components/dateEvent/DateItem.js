import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./DateItem.module.css";

const DateItem = ({ event }) => {
  const date = event.text.slice(0, 10);
  const text = event.text.slice(10);

  return (
    <>
      <Row className={styles.row}>
        {" "}
        <Col sm>
          {" "}
          <img className={styles.eventImg} src={event.image} alt="date" />
        </Col>
        <Col className={styles.text}>
          <h3>{date}</h3>
          <h4 sm>{text}.</h4>
        </Col>
        <Col>
          <hr className={styles.line} />
        </Col>
      </Row>
    </>
  );
};

export default DateItem;
