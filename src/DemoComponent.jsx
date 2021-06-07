import React from "react";
// Styles
import "./DemoComponent.css";
// Component
import BlockComponent from "./BlockComponent";

class DemoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      blocks: [],
    };
  }

  componentDidMount = () => {
    this.getData().then((data) => {
      this.setState({ blocks: data });
    });
  };

  getData = () => {
    // Call service here using promise as a return and with try catch block.
    return Promise.resolve([]);
  };

  getBlock = () => {
    this.state.blocks.map((block) => {
      return <BlockComponent block={block}></BlockComponent>;
    });
  };
  render = () => {
    return (
      <React.Fragment>
        <div className="block-data container">
          <h1 className="data-heading col-xs-12">Data Heading</h1>
          <div className="block-element col-xs-12">{this.getBlock()}</div>
        </div>
      </React.Fragment>
    );
  };
}
export default DemoComponent;
