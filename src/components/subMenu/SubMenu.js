import React from "react";

const SubMenu = (props) => {
  return (
    <ul className={props.className} style={props.style}>
      <li>{props.titles[0]}</li>
      <li>{props.titles[1]}</li>
      <li>{props.titles[2]}</li>
    </ul>
  );
};

export default SubMenu;
