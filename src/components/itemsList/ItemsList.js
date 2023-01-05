import React from "react";
import styles from "./ItemsList.module.css";
import Item from "./Item";
const ItemsList = ({
  hoverWidth,
  results,
  itemSize,
  itemWidth,
  comicsGrid,
}) => {
  return (
    <ul style={comicsGrid} className={styles.list}>
      {results.map((result, resultIdx) => (
        <Item
          hoverWidth={hoverWidth}
          key={resultIdx}
          itemData={result}
          itemSize={itemSize}
          itemWidth={itemWidth}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
