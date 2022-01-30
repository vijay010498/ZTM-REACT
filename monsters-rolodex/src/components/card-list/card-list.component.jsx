import React from "react";
import "./card-list.styles.css";
//Functional component
export const CardList = (props) => {
  console.log(props);
  return <div className="card-list">{props.children}</div>;
};
