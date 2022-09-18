import React, { useEffect } from "react";
import { getDateEvent } from "../../lib/api";
import useHttp from "../../hooks/useHttp";
import LoadingIcon from "../UI/LoadingIcon";
import { Container } from "react-bootstrap";
import DateItem from "./DateItem";
const DateEvent = () => {
  const { sendRequest, status, data, error } = useHttp(getDateEvent, true);

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
    return (
      <>
        <p>{error}</p>
      </>
    );
  }

  if (status === "completed" && !data[0]) {
    return (
      <p
        style={{
          color: "#2d7f9b",
          marginLeft: "15px",
          textShadow: "#000 1px 1px 0, 1px 1px 1px rgba(26,11,7,0.26)",
        }}
      >
        There are no special events that we saw happening today.<br></br>
        contact if you have any idea of what happened today that's related{" "}
      </p>
    );
  }
  console.log(data);

  return (
    <Container>
      {data.map((event) => (
        <DateItem event={event} />
      ))}
    </Container>
  );
};

export default DateEvent;
