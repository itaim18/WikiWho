import React from "react";
import Intro from "../components/intro/Intro";
import DateEvent from "../components/dateEvent/DateEvent";
import WhoDataList from "../components/WhoDataList/WhoDataList";
import styles from "./Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import K9 from "../components/k9/K9";

const Home = () => {
  return (
    <>
      <Container className={styles.container}>
        <Row>
          <Intro>
            <h1 className={styles.who}>DOCTOR WHO</h1>
            <img
              src="images/homeIcon.png"
              alt="home"
              className={styles.homeIcon}
            />
            <p className={styles.text}>
              {" "}
              follows the adventures of a rogue Time Lord with somewhat unknown
              origins who goes by the name "the Doctor".
              <br />
              The Doctor fled Gallifrey, the planet of the Time Lords, in a
              stolen TARDIS ("Time and Relative Dimension in Space"), a time
              machine that travels by materialising into, and dematerialising
              out of, the time vortex.
              <br /> The TARDIS has a vast interior but appears smaller on the
              outside, and is equipped with a "chameleon circuit" intended to
              make the machine take on the appearance of local objects as a
              disguise.
              <br /> Due to a malfunction, the Doctor's TARDIS remains fixed as
              a blue British police box.
            </p>
          </Intro>
          <div className={styles.selfIntro}>
            <Intro>
              <h3
                style={{
                  color: "#2d7f9b",
                  marginLeft: "15px",
                }}
              >
                I made several fullstack and frontend Projects and I wanted to
                make my first MPA (Multi-page Application) in React and I
                realized I should express the ❤️ I have for my favorite TV show
                ever. I hope you'll find here what you looked for or at least
                learned something new. Please contact for any suggestions or
                feedback...
              </h3>{" "}
            </Intro>
          </div>
        </Row>{" "}
        <Row className={styles.dates}>
          <Intro>
            <h1
              style={{
                color: "#C6EBC5",
                fontWeight: 900,
                textDecoration: "underline",
                marginLeft: 15,
              }}
              id="headline"
            >
              On This Day:
            </h1>
            <DateEvent />
          </Intro>
        </Row>
        <Row className={styles.list}>
          <WhoDataList />
        </Row>
      </Container>
      <K9 />
    </>
  );
};

export default Home;
