import React from "react";
import styles from "./WhoDataList.module.css";
import WhoDataItem from "./WhoDataItem";
const dataItems = [
  { id: "d1", name: "doctor 1" },
  { id: "d2", name: "doctor 2" },
  { id: "d3", name: "doctor 3" },
  { id: "d4", name: "doctor 4" },
];
const WhoDataList = () => {
  return (
    <>
      {dataItems.map((item) => (
        <WhoDataItem item={item} key={item.id} />
      ))}
    </>
  );
};

export default WhoDataList;
