import React, { useEffect } from "react";
import ItemsList from "../components/itemsList/ItemsList";
import useHttp from "../hooks/useHttp";
import { getClassicEps } from "../lib/api";
import LoadingIcon from "../components/UI/LoadingIcon";
import K9 from "../components/k9/K9";
const ClassicEra = () => {
  const {
    sendRequest,
    status,
    data: episodes,
    error,
  } = useHttp(getClassicEps, true);

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

  if (status === "completed" && !episodes) {
    return <p>error rendering list</p>;
  }
  return (
    <>
      <h1>Classic Era Series:</h1>
      <ItemsList results={episodes} />
    </>
  );
};

export default ClassicEra;
