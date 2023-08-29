import React from "react";
import "./style.css";

export default function Button(props) {
  return (
    <button className="button-a">{props.children}</button>
  );
}
