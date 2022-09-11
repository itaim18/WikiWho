import React from "react";
import Intro from "../components/intro/Intro";
import DateEvent from "../components/dateEvent/DateEvent";
import WhoDataList from "../components/WhoDataList/WhoDataList";
import styles from "./Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import K9 from "../components/k9/K9";
const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={10} md={5} lg={5}>
            {" "}
            <Intro>
              <h1 className={styles.who}>DOCTOR WHO</h1>
              <p className={styles.text}>
                {" "}
                follows the adventures of a rogue Time Lord with somewhat
                unknown origins who goes by the name "the Doctor". The Doctor
                fled Gallifrey, the planet of the Time Lords, in a stolen TARDIS
                ("Time and Relative Dimension in Space"), a time machine that
                travels by materialising into, and dematerialising out of, the
                time vortex.{" "}
                <p>
                  The TARDIS has a vast interior but appears smaller on the
                  outside, and is equipped with a "chameleon circuit" intended
                  to make the machine take on the appearance of local objects as
                  a disguise.
                  <p>
                    Due to a malfunction, the Doctor's TARDIS remains fixed as a
                    blue British police box.
                  </p>
                </p>
              </p>
            </Intro>
          </Col>
          <Col sm={10} md={5} lg={5}>
            {" "}
            <Intro>
              <DateEvent />
            </Intro>
          </Col>
        </Row>
        <Row>
          <Intro>Bye</Intro>
          <WhoDataList />
        </Row>
      </Container>
      <K9 />
    </>
  );
};

export default Home;
