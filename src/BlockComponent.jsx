import React from "react";
// Styles
import "./DemoComponent.css";

const BlockComponent = (props) => {
  return (
    <div className="block-data-container col-xs-4" key={props.block.id}>
      <h1 className="block-name">{props.block.name}</h1>
      <p className="block-desc">{props.block.DOB}</p>
    </div>
  );
};

export default BlockComponent;
