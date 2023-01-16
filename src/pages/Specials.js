import React, { useEffect } from "react";
import { useQuery } from "react-query";
import LoadingIcon from "../components/UI/LoadingIcon";
import K9 from "../components/k9/K9";
import styles from "./Specials.module.css";
const Specials = () => {
  const fetchSpecial = async () => {
    const response = await fetch(`https://cors-app.onrender.com/specials`);
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    isLoading,
    data: specials,
    isError,
    error,
  } = useQuery(["specials"], fetchSpecial);

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingIcon />
        <K9 />
      </div>
    );
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const special = specials[0];
  return (
    <>
      <h1>Movies:</h1>
      <article className={styles.movie}>
        <img
          style={{ float: "right", margin: "10px 50px" }}
          src={special.image.mediumUrl}
          alt="poster"
        />
        <h1>{special.name}</h1>
        <h2>Release Date: {special.releaseDate.slice(0, 10)}</h2>
        <h2>Runtime: {special.runtime}</h2>
        <div
          id="info-injected"
          dangerouslySetInnerHTML={{ __html: special.description }}
        ></div>
      </article>
    </>
  );
};

export default Specials;
