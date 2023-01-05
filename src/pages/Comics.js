import React, { useEffect } from "react";
import ItemsList from "../components/itemsList/ItemsList";
import useHttp from "../hooks/useHttp";
import { getComics } from "../lib/api";
import LoadingIcon from "../components/UI/LoadingIcon";
import K9 from "../components/k9/K9";
const Comics = () => {
  const { sendRequest, status, data: comics, error } = useHttp(getComics, true);
  var comicWidth = { width: "240px" };
  var comicsGrid = {
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  };
  var hoverWidth = { width: "100%" };
  function detectMob() {
    return window.innerWidth <= 450 && window.innerHeight <= 800;
  }
  if (detectMob()) {
    comicsGrid = {
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    };
    comicWidth = { width: "300px" };
    hoverWidth = { width: "89%" };
  }
  const comicSize = { width: "238px", height: "360px" };
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

  if (status === "completed" && !comics) {
    return <p>error rendering list</p>;
  }
  return (
    <>
      <h1>Comics:</h1>
      <ItemsList
        hoverWidth={hoverWidth}
        results={comics}
        itemSize={comicSize}
        itemWidth={comicWidth}
        comicsGrid={comicsGrid}
      />
    </>
  );
};

export default Comics;
