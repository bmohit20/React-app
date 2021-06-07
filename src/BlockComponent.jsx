import React from "react";
// Styles
import "./DemoComponent.css";

const BlockComponent = (props) => {
  return (
    <div className="block-data-container">
      <h1 ClassName="block-name">{props.block.name}</h1>
      <p className="block-desc">{props.block.desc}</p>
    </div>
  );
};

export default BlockComponent;
