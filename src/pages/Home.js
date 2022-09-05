import React from "react";
import Intro from "../components/intro/Intro";
import DateEvent from "../components/dateEvent/DateEvent";
import WhoDataList from "../components/WhoDataList/WhoDataList";
const Home = () => {
  return (
    <>
      <div className="centered">
        <Intro>
          Doctor Who follows the adventures of the title character, a rogue Time
          Lord with somewhat unknown origins who goes by the name "the Doctor".
          The Doctor fled Gallifrey, the planet of the Time Lords, in a stolen
          TARDIS ("Time and Relative Dimension in Space"), a time machine that
          travels by materialising into, and dematerialising out of, the time
          vortex. The TARDIS has a vast interior but appears smaller on the
          outside, and is equipped with a "chameleon circuit" intended to make
          the machine take on the appearance of local objects as a disguise. Due
          to a malfunction, the Doctor's TARDIS remains fixed as a blue British
          police box.
        </Intro>
        <DateEvent />
      </div>
      <Intro>Bye</Intro>
      <WhoDataList />
    </>
  );
};

export default Home;
