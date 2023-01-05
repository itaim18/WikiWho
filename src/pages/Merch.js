import React, { useEffect } from "react";
import useHttp from "../hooks/useHttp";
import { getMerch } from "../lib/api";
import LoadingIcon from "../components/UI/LoadingIcon";
import K9 from "../components/k9/K9";
import MerchItem from "../components/merchItem/MerchItem";
import styles from "./Merch.module.css";
const Merch = () => {
  const {
    sendRequest,
    status,
    data: searchResults,
    error,
  } = useHttp(getMerch, true);

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

  if (status === "completed" && !searchResults) {
    return <p>error rendering list</p>;
  }
  return (
    <>
      <h1>A real whovian wears it off</h1>
      <ul className={styles.merchList}>
        {searchResults.map((result, resultIdx) => (
          <MerchItem key={resultIdx} data={result} />
        ))}
      </ul>
      <K9 />
    </>
  );
};

export default Merch;
