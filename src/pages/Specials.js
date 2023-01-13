import React, { useEffect } from "react";
import useHttp from "../hooks/useHttp";
import { getSpecials } from "../lib/api";
import LoadingIcon from "../components/UI/LoadingIcon";
import K9 from "../components/k9/K9";
const Specials = () => {
  const {
    sendRequest,
    status,
    data: specials,
    error,
  } = useHttp(getSpecials, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingIcon />
        <K9 />
      </div>
    );
  }
  if (error) {
    return (
      <>
        <p>{error}</p>
        <K9 />
      </>
    );
  }

  if (status === "completed" && !specials) {
    return <p>error rendering list</p>;
  }
  const special = specials[0];
  return (
    <>
      <h1>Movies:</h1>
      <img
        style={{ float: "right", margin: "10px 50px" }}
        src={special.image.mediumUrl}
        alt="poster"
      />
      <h2>{special.name}</h2>
      <h3>Release Date: {special.releaseDate.slice(0, 10)}</h3>
      <h3>Runtime: {special.runtime}</h3>
      <div
        id="info-injected"
        dangerouslySetInnerHTML={{ __html: special.description }}
      ></div>
    </>
  );
};

export default Specials;
