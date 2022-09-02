import React, { useEffect } from "react";
import { getRandomFact } from "../lib/api";
import useHttp from "../hooks/useHttp";
import LoadingIcon from "../components/UI/LoadingIcon";
import FunFactItem from "../components/FunFact/FunFactItem";
const FunFact = () => {
  const {
    sendRequest,
    status,
    data: fact,
    error,
  } = useHttp(getRandomFact, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingIcon />
      </div>
    );
  }
  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && !fact) {
    return <p>error rendering random int.</p>;
  }
  return <FunFactItem fact={fact} />;
};

export default FunFact;
